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
exports.InventoryrawmaterialService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const inventoryrawmaterial_entity_1 = require("./entities/inventoryrawmaterial.entity");
const inventorymoves_service_1 = require("../inventorymoves/inventorymoves.service");
const create_helper_1 = require("../common/helpers/create.helper");
const adapters_1 = require("../common/adapters");
const find_helpers_1 = require("../common/helpers/find.helpers");
let InventoryrawmaterialService = class InventoryrawmaterialService {
    constructor(inventoryrawmaterialRepository, inventorymoveservices, DBErrors) {
        this.inventoryrawmaterialRepository = inventoryrawmaterialRepository;
        this.inventorymoveservices = inventorymoveservices;
        this.DBErrors = DBErrors;
    }
    async inventoryAdjustment(createinventoryrawmaterialDto, manager) {
        const { inventorymoveId, ...restDataInventorymove } = createinventoryrawmaterialDto;
        const inventorymove = await this.inventorymoveservices.findOne(String(inventorymoveId));
        try {
            return await (0, create_helper_1.createRegisterForTransaction)({ ...restDataInventorymove, inventorymoveId: inventorymove }, manager, inventoryrawmaterial_entity_1.Inventoryrawmaterial);
        }
        catch (error) {
            this.DBErrors.exceptionsDB(error);
        }
    }
    async findAll(queryparamsinventoryrawmaterialDto) {
        const { amount, moveinventory, rawmaterial, unitmeasure, limit = 10, page = 1 } = queryparamsinventoryrawmaterialDto;
        const qb = this.inventoryrawmaterialRepository.createQueryBuilder('inventoryrawmaterial')
            .leftJoinAndSelect("inventoryrawmaterial.unitmeasureId", "unitmeasure")
            .leftJoinAndSelect("inventoryrawmaterial.rawmaterialId", "rawmaterial")
            .leftJoinAndSelect("inventoryrawmaterial.inventorymoveId", "inventorymove")
            .orderBy("inventoryrawmaterial.createdAt", "DESC");
        if (amount) {
            qb.andWhere(`inventoryrawmaterial.amount =:amount`, { amount });
        }
        if (unitmeasure) {
            qb.andWhere(`LOWER(unitmeasure.name) LIKE :unitmeasure`, { unitmeasure: `%${unitmeasure.toLowerCase()}%` });
        }
        if (moveinventory) {
            qb.andWhere(`LOWER(inventorymove.name) LIKE :moveinventory`, { moveinventory: `%${moveinventory.toLowerCase()}%` });
        }
        if (rawmaterial) {
            qb.andWhere(`LOWER(rawmaterial.name) LIKE :rawmaterial`, { rawmaterial: `%${rawmaterial.toLowerCase()}%` });
        }
        return await (0, find_helpers_1.getAllPaginated)(qb, { page, take: limit });
    }
};
exports.InventoryrawmaterialService = InventoryrawmaterialService;
exports.InventoryrawmaterialService = InventoryrawmaterialService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(inventoryrawmaterial_entity_1.Inventoryrawmaterial)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        inventorymoves_service_1.InventorymovesService,
        adapters_1.HandleDBErrors])
], InventoryrawmaterialService);
//# sourceMappingURL=inventoryrawmaterial.service.js.map