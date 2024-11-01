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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const adapters_1 = require("../common/adapters");
const product_entity_1 = require("./entities/product.entity");
const typeorm_2 = require("typeorm");
const create_helper_1 = require("../common/helpers/create.helper");
const find_helpers_1 = require("../common/helpers/find.helpers");
const unitmeasure_service_1 = require("../unitmeasure/unitmeasure.service");
const salesdetail_entity_1 = require("../salesdetail/entities/salesdetail.entity");
let ProductsService = class ProductsService {
    constructor(productRepository, unitmeasureservices, dataSource, uuidAdapter, DBErrors) {
        this.productRepository = productRepository;
        this.unitmeasureservices = unitmeasureservices;
        this.dataSource = dataSource;
        this.uuidAdapter = uuidAdapter;
        this.DBErrors = DBErrors;
    }
    async create(createProductDto) {
        const { unitmeasureId, ...productData } = createProductDto;
        const unitmeasure = await this.unitmeasureservices.findOne(String(unitmeasureId));
        try {
            return await (0, create_helper_1.createRegister)(this.productRepository, { ...productData, unitmeasureId: unitmeasure });
        }
        catch (error) {
            this.DBErrors.exceptionsDB(error);
        }
    }
    async findAll(queryparamsproductDto) {
        const { name, price, stock, unitmeasure, deleted = false, limit = 10, page = 1 } = queryparamsproductDto;
        const qb = this.productRepository.createQueryBuilder('product').leftJoinAndSelect("product.unitmeasureId", "unitmeasure");
        qb.where('product.deleted = :deleted', { deleted: deleted });
        if (name) {
            qb.andWhere(`LOWER(product.name) LIKE :name`, { name: `%${name.toLowerCase()}%` });
        }
        if (price) {
            qb.andWhere(`product.price  =:price`, { price: price });
        }
        if (stock) {
            qb.andWhere(`product.stock =:stock`, { stock: stock });
        }
        if (unitmeasure) {
            qb.andWhere(`LOWER(unitmeasure.name) LIKE :unitmeasure`, { unitmeasure: `%${unitmeasure.toLowerCase()}%` });
        }
        return await (0, find_helpers_1.getAllPaginated)(qb, { page, take: limit });
    }
    async findTopProductsSales(queryparamsreporttopproductssaleDto) {
        const { endOfCurrentMonth, startOfCurrentMonth } = queryparamsreporttopproductssaleDto;
        const topProducts = await this.dataSource
            .createQueryBuilder(salesdetail_entity_1.Salesdetail, 'salesdetail')
            .leftJoinAndSelect('salesdetail.productId', 'product')
            .leftJoinAndSelect('salesdetail.saleId', 'sale')
            .where('DATE(sale.createdAt) BETWEEN :startOfCurrentMonth AND :endOfCurrentMonth', { startOfCurrentMonth, endOfCurrentMonth })
            .select('salesdetail.productId')
            .addSelect('product.name', 'product_name')
            .addSelect('product.url', 'url')
            .addSelect('SUM(salesdetail.amount)', 'total_sold')
            .groupBy('salesdetail.productId, product.name, product.url')
            .orderBy('total_sold', 'DESC')
            .limit(5)
            .getRawMany();
        return topProducts;
    }
    async findOne(term) {
        let product;
        if (this.uuidAdapter.IsUUID(term)) {
            product = await this.productRepository.findOneBy({ id: term });
        }
        else {
            const queryBuilder = this.productRepository.createQueryBuilder('product');
            product = await queryBuilder
                .where("LOWER(name) = LOWER(:name)", {
                name: term
            }).getOne();
        }
        if (!product)
            throw new common_1.BadRequestException(`Producto con ${term} no encontrado`);
        return product;
    }
    async update(id, updateProductDto, manager) {
        const { unitmeasureId, ...updateProductrestData } = updateProductDto;
        const unitmeasure = await this.unitmeasureservices.findOne(String(unitmeasureId));
        const product = await this.productRepository.preload({ id,
            unitmeasureId: unitmeasure, ...updateProductrestData });
        if (!product)
            throw new common_1.NotFoundException(`Producto con id: ${id} no existe`);
        const repo = manager ? manager.getRepository(product_entity_1.Product) : this.productRepository;
        try {
            return repo.save({ ...product });
        }
        catch (error) {
            this.DBErrors.exceptionsDB(error);
        }
    }
    async remove(id) {
        const product = await this.findOne(id);
        await this.productRepository.save({ ...product, deleted: true });
        return {
            message: "Producto eliminado"
        };
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __param(2, (0, typeorm_1.InjectDataSource)()),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        unitmeasure_service_1.UnitmeasureService,
        typeorm_2.DataSource,
        adapters_1.UuidAdapter,
        adapters_1.HandleDBErrors])
], ProductsService);
//# sourceMappingURL=products.service.js.map