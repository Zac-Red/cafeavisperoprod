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
exports.ShoppingService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const shopping_entity_1 = require("./entities/shopping.entity");
const typeorm_2 = require("typeorm");
const adapters_1 = require("../common/adapters");
const suppliers_service_1 = require("../suppliers/suppliers.service");
const rawmaterial_service_1 = require("../rawmaterial/rawmaterial.service");
const shoppingdetail_service_1 = require("../shoppingdetail/shoppingdetail.service");
const inventoryrawmaterial_service_1 = require("../inventoryrawmaterial/inventoryrawmaterial.service");
const find_helpers_1 = require("../common/helpers/find.helpers");
const shoppingdetail_entity_1 = require("../shoppingdetail/entities/shoppingdetail.entity");
let ShoppingService = class ShoppingService {
    constructor(shoppingRepository, shoppingdetailservice, supplierservices, rawmaterialservices, inventoryrawmaterialservice, dataSource, DBErrors, uuidAdapter) {
        this.shoppingRepository = shoppingRepository;
        this.shoppingdetailservice = shoppingdetailservice;
        this.supplierservices = supplierservices;
        this.rawmaterialservices = rawmaterialservices;
        this.inventoryrawmaterialservice = inventoryrawmaterialservice;
        this.dataSource = dataSource;
        this.DBErrors = DBErrors;
        this.uuidAdapter = uuidAdapter;
    }
    async create(createShoppingDto) {
        const { shoppingdetail, supplierId, ...restDataShopping } = createShoppingDto;
        let shoppingComplet;
        await this.dataSource.transaction(async (manager) => {
            try {
                const supplier = await this.supplierservices.findOne(supplierId);
                const shopping = manager.create(shopping_entity_1.Shopping, { ...restDataShopping, supplierId: supplier });
                shoppingComplet = await manager.save(shopping);
            }
            catch (error) {
                this.DBErrors.exceptionsDB(error);
            }
            if (shoppingdetail.length === 0)
                throw new common_1.BadRequestException(`No se recibieron los detalles de la compra`);
            for (const detail of shoppingdetail) {
                const { rawmaterialId, amount, price, subtotal } = detail;
                const rawmaterial = await this.rawmaterialservices.findOne(rawmaterialId);
                await this.shoppingdetailservice.create({ rawmaterialId, amount, price, subtotal, unitmeasureId: rawmaterial.unitmeasureId.id, shoppingId: shoppingComplet.id }, manager);
                const { stock, ...restDatarawmaterial } = rawmaterial;
                await this.rawmaterialservices.update(restDatarawmaterial.id, { ...restDatarawmaterial,
                    supplierId: restDatarawmaterial.supplierId.id,
                    unitmeasureId: Number(restDatarawmaterial.unitmeasureId.id),
                    stock: stock + amount }, manager);
                await this.inventoryrawmaterialservice.inventoryAdjustment({ amount, inventorymoveId: 2, rawmaterialId, unitmeasureId: rawmaterial.unitmeasureId.id }, manager);
            }
        });
        return {
            shoppingComplet
        };
    }
    async findAll(queryparamsshoppingDto) {
        const { suppliername, total, commercialdocument, limit = 10, page = 1 } = queryparamsshoppingDto;
        const qb = this.shoppingRepository.createQueryBuilder('shopings')
            .leftJoinAndSelect("shopings.supplierId", "supplier")
            .orderBy("shopings.createdAt", "DESC");
        if (suppliername) {
            qb.andWhere(`LOWER(supplier.namecontact) LIKE :name`, { name: `%${suppliername.toLowerCase()}%` });
        }
        if (commercialdocument) {
            qb.andWhere(`shopings.commercialdocument LIKE :commercialdocument`, { commercialdocument: `${commercialdocument}` });
        }
        if (total) {
            qb.andWhere(`shopings.total =:total`, { total });
        }
        return await (0, find_helpers_1.getAllPaginated)(qb, { page, take: limit });
    }
    async findOne(term) {
        let shopping;
        if (this.uuidAdapter.IsUUID(term)) {
            shopping = await this.shoppingRepository.findOneBy({ id: term });
        }
        if (!shopping)
            throw new common_1.BadRequestException(`La compra con id ${term} no existe`);
        return shopping;
    }
    async revertShopping(shoppingId) {
        await this.dataSource.transaction(async (manager) => {
            const shopping = await manager.findOne(shopping_entity_1.Shopping, { where: { id: shoppingId } });
            if (!shopping)
                throw new common_1.NotFoundException(`Compra con ID ${shoppingId} no encontrada`);
            const { shoppingdetails } = await this.shoppingdetailservice.findOne(shopping.id);
            for (const detail of shoppingdetails) {
                const { rawmaterialId, amount } = detail;
                const rawmaterial = await this.rawmaterialservices.findOne(rawmaterialId.id);
                const newStock = rawmaterial.stock - amount;
                await this.rawmaterialservices.update(rawmaterialId.id, {
                    ...rawmaterial,
                    supplierId: rawmaterial.supplierId.id,
                    unitmeasureId: Number(rawmaterial.unitmeasureId.id),
                    stock: newStock
                }, manager);
                await this.inventoryrawmaterialservice.inventoryAdjustment({ amount: amount, inventorymoveId: 1, rawmaterialId: rawmaterialId.id, unitmeasureId: rawmaterial.unitmeasureId.id }, manager);
            }
            await manager.delete(shoppingdetail_entity_1.ShoppingDetail, { shoppingId: shopping.id });
            await manager.delete(shopping_entity_1.Shopping, { id: shoppingId });
        });
    }
};
exports.ShoppingService = ShoppingService;
exports.ShoppingService = ShoppingService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(shopping_entity_1.Shopping)),
    __param(5, (0, typeorm_1.InjectDataSource)()),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        shoppingdetail_service_1.ShoppingdetailService,
        suppliers_service_1.SuppliersService,
        rawmaterial_service_1.RawmaterialService,
        inventoryrawmaterial_service_1.InventoryrawmaterialService,
        typeorm_2.DataSource,
        adapters_1.HandleDBErrors,
        adapters_1.UuidAdapter])
], ShoppingService);
//# sourceMappingURL=shopping.service.js.map