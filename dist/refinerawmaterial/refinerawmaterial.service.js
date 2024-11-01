"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefinerawmaterialService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const refinerawmaterial_entity_1 = require("./entities/refinerawmaterial.entity");
const adapters_1 = require("../common/adapters");
const rawmaterial_service_1 = require("../rawmaterial/rawmaterial.service");
const find_helpers_1 = require("../common/helpers/find.helpers");
const conversionrawmaterial_entity_1 = require("./entities/conversionrawmaterial.entity");
const unitmeasure_service_1 = require("../unitmeasure/unitmeasure.service");
const inventoryrawmaterial_service_1 = require("../inventoryrawmaterial/inventoryrawmaterial.service");
let RefinerawmaterialService = class RefinerawmaterialService {
    constructor(refinerawmaterialRepository, conversionrawmaterialRepository, rawmaterialservice, unitmeasureservice, inventoryrawmaterialservice, DBErrors, uuidAdapter, dataSource) {
        this.refinerawmaterialRepository = refinerawmaterialRepository;
        this.conversionrawmaterialRepository = conversionrawmaterialRepository;
        this.rawmaterialservice = rawmaterialservice;
        this.unitmeasureservice = unitmeasureservice;
        this.inventoryrawmaterialservice = inventoryrawmaterialservice;
        this.DBErrors = DBErrors;
        this.uuidAdapter = uuidAdapter;
        this.dataSource = dataSource;
    }
    async create(createRefinerawmaterialDto) {
        const { amount, rawmaterialId, unitmeasureId } = createRefinerawmaterialDto;
        let refinerawmaterialcomplet;
        await this.dataSource.transaction(async (manager) => {
            const rawmaterial = await this.rawmaterialservice.findOne(rawmaterialId);
            const unitmeasure = await this.unitmeasureservice.findOne(String(unitmeasureId));
            try {
                const refinematerial = manager.create(refinerawmaterial_entity_1.Refinerawmaterial, { amount, rawmaterialId: rawmaterial, unitmeasureId: unitmeasure });
                refinerawmaterialcomplet = await manager.save(refinematerial);
            }
            catch (error) {
                this.DBErrors.exceptionsDB(error);
            }
            let rawstockconversion = rawmaterial.stock * rawmaterial.unitmeasureId.conversionfactor;
            let quantityconversion = amount * unitmeasure.conversionfactor;
            let rawmastock = rawstockconversion + quantityconversion;
            let rawrealstock = rawmastock / rawmaterial.unitmeasureId.conversionfactor;
            await this.rawmaterialservice.update(rawmaterial.id, {
                stock: rawrealstock,
                supplierId: rawmaterial.supplierId.id,
                unitmeasureId: rawmaterial.unitmeasureId.id
            }, manager);
            await this.inventoryrawmaterialservice.inventoryAdjustment({
                amount,
                inventorymoveId: 2,
                rawmaterialId: rawmaterial.id,
                unitmeasureId: unitmeasure.id
            }, manager);
        });
        return {
            refinerawmaterialcomplet
        };
    }
    async findAll(queryparamsrefinerawmaterialDto) {
        const { rawmaterial, limit = 10, page = 1 } = queryparamsrefinerawmaterialDto;
        const qb = this.refinerawmaterialRepository.createQueryBuilder('refinerawmaterial')
            .leftJoinAndSelect("refinerawmaterial.rawmaterialId", "rawmaterial")
            .orderBy("refinerawmaterial.id", "ASC");
        if (rawmaterial) {
            qb.where(`LOWER(rawmaterial.name) LIKE :name`, { name: `%${rawmaterial.toLowerCase()}%` });
        }
        return await (0, find_helpers_1.getAllPaginated)(qb, { page, take: limit });
    }
    async findOne(term) {
        let refinerawmaterial;
        if (this.uuidAdapter.IsUUID(term)) {
            refinerawmaterial = await this.refinerawmaterialRepository.findOneBy({ id: term });
        }
        else {
            const queryBuilder = this.refinerawmaterialRepository.createQueryBuilder('refinerawmaterial')
                .leftJoinAndSelect("refinerawmaterial.rawmaterialId", "rawmaterial");
            refinerawmaterial = await queryBuilder
                .where("LOWER(rawmaterial.name) = LOWER(:name)", { name: term }).getOne();
        }
        if (!refinerawmaterial)
            throw new common_1.BadRequestException(`El procesado de material prima ${term} no existe`);
        return refinerawmaterial;
    }
    async revertRefinement(refinementId) {
        await this.dataSource.transaction(async (manager) => {
            const refinement = await manager.findOne(refinerawmaterial_entity_1.Refinerawmaterial, { where: { id: refinementId } });
            if (!refinement)
                throw new common_1.NotFoundException(`Refinamiento con ID ${refinementId} no encontrado`);
            const { amount, rawmaterialId, unitmeasureId } = refinement;
            const rawmaterial = await this.rawmaterialservice.findOne(rawmaterialId.id);
            let rawstockconversion = rawmaterial.stock * rawmaterial.unitmeasureId.conversionfactor;
            let quantityconversion = amount * unitmeasureId.conversionfactor;
            let rawmastock = rawstockconversion - quantityconversion;
            let rawrealstock = rawmastock / rawmaterial.unitmeasureId.conversionfactor;
            await this.rawmaterialservice.update(rawmaterialId.id, {
                stock: rawrealstock,
                supplierId: rawmaterial.supplierId.id,
                unitmeasureId: rawmaterial.unitmeasureId.id
            }, manager);
            await this.inventoryrawmaterialservice.inventoryAdjustment({ amount: amount, inventorymoveId: 1, rawmaterialId: rawmaterialId.id, unitmeasureId: unitmeasureId.id }, manager);
            await manager.delete(refinerawmaterial_entity_1.Refinerawmaterial, { id: refinementId });
        });
    }
    async convertRawMaterial(createconversionrawmaterialDto) {
        const { amountToConvert, sourceMaterialId, targetMaterialId, unitMeasureSourceId, unitMeasureTargetId } = createconversionrawmaterialDto;
        const sourceMaterial = await this.rawmaterialservice.findOne(sourceMaterialId);
        const targetMaterial = await this.rawmaterialservice.findOne(targetMaterialId);
        const targetUnit = await this.unitmeasureservice.findOne(String(unitMeasureTargetId));
        const sourceUnit = await this.unitmeasureservice.findOne(String(unitMeasureSourceId));
        return this.dataSource.transaction(async (manager) => {
            const amountInBaseUnit = amountToConvert * sourceUnit.conversionfactor;
            const amountToDeduct = amountInBaseUnit / sourceMaterial.unitmeasureId.conversionfactor;
            if (sourceMaterial.stock < amountToDeduct) {
                throw new common_1.BadRequestException('Stock insuficiente');
            }
            sourceMaterial.stock -= amountToDeduct;
            const amountInTargetUnit = amountInBaseUnit / targetUnit.conversionfactor;
            const amountToAdd = amountInTargetUnit * targetMaterial.unitmeasureId.conversionfactor;
            targetMaterial.stock += amountToAdd;
            await manager.save(sourceMaterial);
            this.inventoryrawmaterialservice.inventoryAdjustment({
                amount: amountInBaseUnit,
                inventorymoveId: 1,
                rawmaterialId: sourceMaterial.id,
                unitmeasureId: sourceUnit.id
            }, manager);
            await manager.save(targetMaterial);
            this.inventoryrawmaterialservice.inventoryAdjustment({
                amount: amountInTargetUnit,
                inventorymoveId: 2,
                rawmaterialId: targetMaterial.id,
                unitmeasureId: targetUnit.id
            }, manager);
            const conversionRecord = manager.create(conversionrawmaterial_entity_1.Conversionrawmaterial, {
                amount: amountToConvert,
                rawmaterialId: sourceMaterial,
                unitmeasureId: sourceUnit,
            });
            await manager.save(conversionRecord);
            return { sourceMaterial, targetMaterial };
        });
    }
};
exports.RefinerawmaterialService = RefinerawmaterialService;
exports.RefinerawmaterialService = RefinerawmaterialService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(refinerawmaterial_entity_1.Refinerawmaterial)),
    __param(1, (0, typeorm_1.InjectRepository)(conversionrawmaterial_entity_1.Conversionrawmaterial)),
    __param(7, (0, typeorm_1.InjectDataSource)()),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        rawmaterial_service_1.RawmaterialService,
        unitmeasure_service_1.UnitmeasureService,
        inventoryrawmaterial_service_1.InventoryrawmaterialService,
        adapters_1.HandleDBErrors,
        adapters_1.UuidAdapter,
        typeorm_2.DataSource])
], RefinerawmaterialService);
//# sourceMappingURL=refinerawmaterial.service.js.map