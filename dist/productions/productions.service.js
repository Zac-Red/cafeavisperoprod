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
exports.ProductionsService = void 0;
const common_1 = require("@nestjs/common");
const production_entity_1 = require("./entities/production.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const adapters_1 = require("../common/adapters");
const products_service_1 = require("../products/products.service");
const rawmaterial_service_1 = require("../rawmaterial/rawmaterial.service");
const detailproduction_service_1 = require("../detailproduction/detailproduction.service");
const inventoryproduct_service_1 = require("../inventoryproduct/inventoryproduct.service");
const inventoryrawmaterial_service_1 = require("../inventoryrawmaterial/inventoryrawmaterial.service");
const find_helpers_1 = require("../common/helpers/find.helpers");
let ProductionsService = class ProductionsService {
    constructor(productionRepository, productsservices, rawmaterialservice, detailproductionservice, inventoryproductservice, inventoryrawmaterialservice, dataSource, DBErrors, uuidAdapter) {
        this.productionRepository = productionRepository;
        this.productsservices = productsservices;
        this.rawmaterialservice = rawmaterialservice;
        this.detailproductionservice = detailproductionservice;
        this.inventoryproductservice = inventoryproductservice;
        this.inventoryrawmaterialservice = inventoryrawmaterialservice;
        this.dataSource = dataSource;
        this.DBErrors = DBErrors;
        this.uuidAdapter = uuidAdapter;
    }
    async create(createProductionDto) {
        const { amount, recipproductionId } = createProductionDto;
        let productionComplet;
        await this.dataSource.transaction(async (manager) => {
            const { detailsproduction, recipproduction } = await this.detailproductionservice.findOne(recipproductionId);
            try {
                const production = manager.create(production_entity_1.Production, { amount, recipproductionId: recipproduction });
                productionComplet = await manager.save(production);
            }
            catch (error) {
                this.DBErrors.exceptionsDB(error);
            }
            if (detailsproduction.length === 0)
                throw new common_1.BadRequestException(`No se recibieron los detalles de la receta`);
            for (const detail of detailsproduction) {
                const { rawmaterialId, amount, unitmeasureId } = detail;
                const rawmaterial = await this.rawmaterialservice.findOne(rawmaterialId.id);
                if (rawmaterial.stock === 0)
                    throw new common_1.BadRequestException(`${rawmaterial.name} no tiene stock suficiente`);
                let rawstockconversion = rawmaterial.stock * rawmaterial.unitmeasureId.conversionfactor;
                let quantityconversion = amount * productionComplet.amount * unitmeasureId.conversionfactor;
                if (rawstockconversion < quantityconversion)
                    throw new common_1.BadRequestException(`${rawmaterial.name} no tiene stock suficiente`);
                let rawmastock = rawstockconversion - quantityconversion;
                let rawrealstock = rawmastock / rawmaterial.unitmeasureId.conversionfactor;
                let quantityreal = quantityconversion / rawmaterial.unitmeasureId.conversionfactor;
                await this.rawmaterialservice.update(rawmaterialId.id, {
                    stock: rawrealstock,
                    supplierId: rawmaterial.supplierId.id,
                    unitmeasureId: rawmaterial.unitmeasureId.id
                }, manager);
                await this.inventoryrawmaterialservice.inventoryAdjustment({ amount: quantityconversion, inventorymoveId: 1, rawmaterialId: rawmaterial.id, unitmeasureId: unitmeasureId.id }, manager);
            }
            await this.productsservices.update(recipproduction.productId.id, {
                unitmeasureId: Number(recipproduction.productId.unitmeasureId.id),
                stock: recipproduction.productId.stock + amount
            }, manager);
            await this.inventoryproductservice.inventoryAdjustment({ amount, inventorymoveId: 2, productId: recipproduction.productId.id, unitmeasureId: recipproduction.productId.unitmeasureId.id }, manager);
        });
        return {
            productionComplet
        };
    }
    async findAll(queryparamsproductionsDto) {
        const { name, product, limit = 10, page = 1 } = queryparamsproductionsDto;
        const qb = this.productionRepository.createQueryBuilder('production')
            .leftJoinAndSelect("production.recipproductionId", "recipproduction")
            .leftJoinAndSelect("recipproduction.productId", "productrecip")
            .orderBy("production.createdAt", "DESC");
        if (name) {
            qb.andWhere(`LOWER(recipproduction.name) LIKE :name`, { name: `%${name.toLowerCase()}%` });
        }
        if (product) {
            qb.andWhere(`LOWER(productrecip.name) LIKE :product`, { product: `%${product.toLowerCase()}%` });
        }
        return await (0, find_helpers_1.getAllPaginated)(qb, { page, take: limit });
    }
    async revertProduction(productionId) {
        await this.dataSource.transaction(async (manager) => {
            const production = await manager.findOne(production_entity_1.Production, { where: { id: productionId } });
            if (!production)
                throw new common_1.NotFoundException(`Producción con ID ${productionId} no encontrada`);
            const { amount, recipproductionId } = production;
            const { detailsproduction, recipproduction } = await this.detailproductionservice.findOne(recipproductionId.id);
            for (const detail of detailsproduction) {
                const { rawmaterialId, amount: detailAmount, unitmeasureId } = detail;
                const rawmaterial = await this.rawmaterialservice.findOne(rawmaterialId.id);
                let quantityconversion = detailAmount * amount * unitmeasureId.conversionfactor;
                let rawmastock = rawmaterial.stock * rawmaterial.unitmeasureId.conversionfactor + quantityconversion;
                let rawrealstock = rawmastock / rawmaterial.unitmeasureId.conversionfactor;
                await this.rawmaterialservice.update(rawmaterialId.id, {
                    stock: rawrealstock,
                    supplierId: rawmaterial.supplierId.id,
                    unitmeasureId: rawmaterial.unitmeasureId.id
                }, manager);
                await this.inventoryrawmaterialservice.inventoryAdjustment({ amount: quantityconversion, inventorymoveId: 3, rawmaterialId: rawmaterial.id, unitmeasureId: unitmeasureId.id }, manager);
            }
            if (recipproduction.productId.stock < amount)
                throw new common_1.NotFoundException(`Error esta revirtiendo una transacción del producto ${recipproduction.productId.name} y los items no cuadran consulte con soporte`);
            await this.productsservices.update(recipproduction.productId.id, {
                unitmeasureId: Number(recipproduction.productId.unitmeasureId.id),
                stock: recipproduction.productId.stock - amount
            }, manager);
            await this.inventoryproductservice.inventoryAdjustment({ amount: amount, inventorymoveId: 1, productId: recipproduction.productId.id, unitmeasureId: recipproduction.productId.unitmeasureId.id }, manager);
            await manager.delete(production_entity_1.Production, { id: productionId });
        });
    }
    async findTopProductProduction(queryparamsreporttopproductsproductionsDto) {
        const { startOfCurrentMonth, endOfCurrentMonth } = queryparamsreporttopproductsproductionsDto;
        const topProducts = await this.dataSource
            .getRepository(production_entity_1.Production)
            .createQueryBuilder('production')
            .leftJoin('production.recipproductionId', 'recipproduction')
            .leftJoin('recipproduction.productId', 'product')
            .select('product.id', 'productId')
            .addSelect('product.name', 'product_name')
            .addSelect('product.url', 'url')
            .addSelect('SUM(production.amount)', 'total_amount')
            .where('DATE(production.createdAt) BETWEEN :start AND :end', { start: startOfCurrentMonth, end: endOfCurrentMonth })
            .groupBy('product.id, product.name, product.url')
            .orderBy('total_amount', 'DESC')
            .limit(5)
            .getRawMany();
        return topProducts;
    }
};
exports.ProductionsService = ProductionsService;
exports.ProductionsService = ProductionsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(production_entity_1.Production)),
    __param(6, (0, typeorm_1.InjectDataSource)()),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        products_service_1.ProductsService,
        rawmaterial_service_1.RawmaterialService,
        detailproduction_service_1.DetailproductionService,
        inventoryproduct_service_1.InventoryproductService,
        inventoryrawmaterial_service_1.InventoryrawmaterialService,
        typeorm_2.DataSource,
        adapters_1.HandleDBErrors,
        adapters_1.UuidAdapter])
], ProductionsService);
//# sourceMappingURL=productions.service.js.map