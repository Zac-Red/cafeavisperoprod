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
exports.InventoryproductService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const inventoryproduct_entity_1 = require("./entities/inventoryproduct.entity");
const inventorymoves_service_1 = require("../inventorymoves/inventorymoves.service");
const adapters_1 = require("../common/adapters");
const create_helper_1 = require("../common/helpers/create.helper");
const find_helpers_1 = require("../common/helpers/find.helpers");
let InventoryproductService = class InventoryproductService {
    constructor(inventoryproductRepository, inventorymoveservices, DBErrors) {
        this.inventoryproductRepository = inventoryproductRepository;
        this.inventorymoveservices = inventorymoveservices;
        this.DBErrors = DBErrors;
    }
    async inventoryAdjustment(createInventoryproductDto, manager) {
        const { inventorymoveId, ...restDataInventorymove } = createInventoryproductDto;
        const inventorymove = await this.inventorymoveservices.findOne(String(inventorymoveId));
        try {
            return await (0, create_helper_1.createRegisterForTransaction)({ ...restDataInventorymove, inventorymoveId: inventorymove }, manager, inventoryproduct_entity_1.Inventoryproduct);
        }
        catch (error) {
            this.DBErrors.exceptionsDB(error);
        }
    }
    async findAll(queryparamsinventoryproductDto) {
        const { amount, limit = 10, page = 1, product, tipomovimiento, unitmeasure } = queryparamsinventoryproductDto;
        const qb = this.inventoryproductRepository.createQueryBuilder('invetoryproduct')
            .leftJoinAndSelect("invetoryproduct.unitmeasureId", "unitmeasure")
            .leftJoinAndSelect("invetoryproduct.productId", "product")
            .leftJoinAndSelect("invetoryproduct.inventorymoveId", "inventorymove")
            .orderBy("invetoryproduct.createdAt", "DESC");
        if (product) {
            qb.andWhere(`LOWER(product.name) LIKE :name`, { name: `%${product.toLowerCase()}%` });
        }
        if (amount) {
            qb.andWhere(`invetoryproduct.amount =:amount`, { amount });
        }
        if (unitmeasure) {
            qb.andWhere(`LOWER(unitmeasure.name) LIKE :unitmeasure`, { unitmeasure: `%${unitmeasure.toLowerCase()}%` });
        }
        if (tipomovimiento) {
            qb.andWhere(`LOWER(inventorymove.name) LIKE :tipomovimiento`, { tipomovimiento: `%${tipomovimiento.toLowerCase()}%` });
        }
        return await (0, find_helpers_1.getAllPaginated)(qb, { page, take: limit });
    }
};
exports.InventoryproductService = InventoryproductService;
exports.InventoryproductService = InventoryproductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(inventoryproduct_entity_1.Inventoryproduct)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        inventorymoves_service_1.InventorymovesService,
        adapters_1.HandleDBErrors])
], InventoryproductService);
//# sourceMappingURL=inventoryproduct.service.js.map