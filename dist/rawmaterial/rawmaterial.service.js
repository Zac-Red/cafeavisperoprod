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
exports.RawmaterialService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const rawmaterial_entity_1 = require("./entities/rawmaterial.entity");
const uui_adapter_1 = require("../common/adapters/uui.adapter");
const adapters_1 = require("../common/adapters");
const find_helpers_1 = require("../common/helpers/find.helpers");
const create_helper_1 = require("../common/helpers/create.helper");
const suppliers_service_1 = require("../suppliers/suppliers.service");
const unitmeasure_service_1 = require("../unitmeasure/unitmeasure.service");
const shoppingdetail_entity_1 = require("../shoppingdetail/entities/shoppingdetail.entity");
let RawmaterialService = class RawmaterialService {
    constructor(rawMaterialRepository, supplierservices, unitmeasureservices, dataSource, DBErrors, uuidAdapter) {
        this.rawMaterialRepository = rawMaterialRepository;
        this.supplierservices = supplierservices;
        this.unitmeasureservices = unitmeasureservices;
        this.dataSource = dataSource;
        this.DBErrors = DBErrors;
        this.uuidAdapter = uuidAdapter;
    }
    async create(createRawmaterialDto) {
        const { supplierId, unitmeasureId } = createRawmaterialDto;
        const supplier = await this.supplierservices.findOne(supplierId);
        const unitmeasure = await this.unitmeasureservices.findOne(String(unitmeasureId));
        try {
            return await (0, create_helper_1.createRegister)(this.rawMaterialRepository, { ...createRawmaterialDto, supplierId: supplier, unitMeasureId: unitmeasure });
        }
        catch (error) {
            this.DBErrors.exceptionsDB(error);
        }
    }
    async findAll(queryparamsrawmaterial) {
        const { name, unitmeasure, supplier, supplierId, deleted = false, limit = 10, page = 1 } = queryparamsrawmaterial;
        const qb = this.rawMaterialRepository.createQueryBuilder('rawmaterial')
            .leftJoinAndSelect("rawmaterial.unitmeasureId", "unitmeasure")
            .leftJoinAndSelect("rawmaterial.supplierId", "supplier");
        qb.where('rawmaterial.deleted = :deleted', { deleted: deleted });
        if (name) {
            qb.andWhere(`LOWER(rawmaterial.name) LIKE :name`, { name: `%${name.toLowerCase()}%` });
        }
        if (unitmeasure) {
            qb.andWhere(`LOWER(unitmeasure.name) LIKE :name`, { name: `%${unitmeasure.toLowerCase()}%` });
        }
        if (supplier) {
            qb.andWhere(`LOWER(supplier.namecontact) LIKE :name`, { name: `%${supplier.toLowerCase()}%` });
        }
        if (supplierId) {
            if (this.uuidAdapter.IsUUID(supplierId)) {
                qb.andWhere(`supplier.id = :supplierId`, { supplierId });
            }
        }
        return await (0, find_helpers_1.getAllPaginated)(qb, { page, take: limit });
    }
    async findTopRawMaterialShopping(queryparamsreporttoprawmaterialshoppDto) {
        const { endOfCurrentMonth, startOfCurrentMonth } = queryparamsreporttoprawmaterialshoppDto;
        const topRawmaterial = await this.dataSource
            .createQueryBuilder(shoppingdetail_entity_1.ShoppingDetail, 'shopingdetail')
            .leftJoinAndSelect('shopingdetail.rawmaterialId', 'rawmaterial')
            .leftJoinAndSelect('shopingdetail.shoppingId', 'shoping')
            .where('DATE(shoping.createdAt) BETWEEN :startOfCurrentMonth AND :endOfCurrentMonth', { startOfCurrentMonth, endOfCurrentMonth })
            .select('shopingdetail.rawmaterialId')
            .addSelect('rawmaterial.name', 'rawmaterial_name')
            .addSelect('rawmaterial.url', 'url')
            .addSelect('SUM(shopingdetail.amount)', 'total_purchase')
            .groupBy('shopingdetail.rawmaterialId, rawmaterial.name, rawmaterial.url')
            .orderBy('total_purchase', 'DESC')
            .limit(5)
            .getRawMany();
        return topRawmaterial;
    }
    async findOne(term) {
        let rawmaterial;
        if (this.uuidAdapter.IsUUID(term)) {
            rawmaterial = await this.rawMaterialRepository.findOneBy({ id: term });
        }
        else {
            const queryBuilder = this.rawMaterialRepository.createQueryBuilder('rawmaetrial');
            rawmaterial = await queryBuilder.where("LOWER(name) = LOWER(:name)", { name: term }).getOne();
        }
        if (!rawmaterial)
            throw new common_1.BadRequestException(`Materia prima con termino ${term} no existe`);
        return rawmaterial;
    }
    async update(id, updateRawmaterialDto, manager) {
        const { supplierId, unitmeasureId, ...restDataRawmaterial } = updateRawmaterialDto;
        const supplier = await this.supplierservices.findOne(supplierId);
        const unitmeasure = await this.unitmeasureservices.findOne(String(unitmeasureId));
        const rawmaterial = await this.rawMaterialRepository.preload({ id,
            supplierId: supplier, unitmeasureId: unitmeasure, ...restDataRawmaterial });
        if (!rawmaterial)
            throw new common_1.NotFoundException(`Materia prima con id: ${id} no existe`);
        const repo = manager ? manager.getRepository(rawmaterial_entity_1.Rawmaterial) : this.rawMaterialRepository;
        try {
            return repo.save({ ...rawmaterial });
        }
        catch (error) {
            this.DBErrors.exceptionsDB(error);
        }
    }
    async remove(id) {
        const rawmaterial = await this.findOne(id);
        await this.rawMaterialRepository.save({ ...rawmaterial, deleted: true });
        return {
            message: "Materia prima eliminada"
        };
    }
};
exports.RawmaterialService = RawmaterialService;
exports.RawmaterialService = RawmaterialService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(rawmaterial_entity_1.Rawmaterial)),
    __param(3, (0, typeorm_1.InjectDataSource)()),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        suppliers_service_1.SuppliersService,
        unitmeasure_service_1.UnitmeasureService,
        typeorm_2.DataSource,
        adapters_1.HandleDBErrors,
        uui_adapter_1.UuidAdapter])
], RawmaterialService);
//# sourceMappingURL=rawmaterial.service.js.map