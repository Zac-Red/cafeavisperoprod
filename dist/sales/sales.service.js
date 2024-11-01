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
exports.SalesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const sale_entity_1 = require("./entities/sale.entity");
const typeorm_2 = require("typeorm");
const adapters_1 = require("../common/adapters");
const salesdetail_service_1 = require("../salesdetail/salesdetail.service");
const customers_service_1 = require("../customers/customers.service");
const products_service_1 = require("../products/products.service");
const inventoryproduct_service_1 = require("../inventoryproduct/inventoryproduct.service");
const find_helpers_1 = require("../common/helpers/find.helpers");
const customer_entity_1 = require("../customers/entities/customer.entity");
const salesdetail_entity_1 = require("../salesdetail/entities/salesdetail.entity");
let SalesService = class SalesService {
    constructor(saleRepository, salesdetailservice, customersservice, productsservice, inventoryproductservice, dataSource, DBErrors, uuidAdapter) {
        this.saleRepository = saleRepository;
        this.salesdetailservice = salesdetailservice;
        this.customersservice = customersservice;
        this.productsservice = productsservice;
        this.inventoryproductservice = inventoryproductservice;
        this.dataSource = dataSource;
        this.DBErrors = DBErrors;
        this.uuidAdapter = uuidAdapter;
    }
    async create(createSaleDto) {
        const { salesdetail, customerId, ...restDataSale } = createSaleDto;
        let saleComplet;
        await this.dataSource.transaction(async (manager) => {
            const customer = await this.customersservice.findOne(customerId);
            try {
                const sale = manager.create(sale_entity_1.Sale, { ...restDataSale, customerId: customer });
                saleComplet = await manager.save(sale);
            }
            catch (error) {
                this.DBErrors.exceptionsDB(error);
            }
            if (salesdetail.length === 0)
                throw new common_1.BadRequestException(`No se recibieron los detalles de la venta`);
            for (const detail of salesdetail) {
                const { productId, amount, price, subtotal } = detail;
                const product = await this.productsservice.findOne(productId);
                await this.salesdetailservice.create({ productId, amount, price, subtotal, unitmeasureId: product.unitmeasureId.id, saleId: saleComplet.id }, manager);
                const { stock, ...restDataproduct } = product;
                if (stock < amount) {
                    throw new common_1.BadRequestException(`El stock del producto ${restDataproduct.name} no es suficiente`);
                }
                await this.productsservice.update(restDataproduct.id, {
                    ...restDataproduct,
                    unitmeasureId: Number(restDataproduct.unitmeasureId.id),
                    stock: stock - amount
                }, manager);
                await this.inventoryproductservice.inventoryAdjustment({ amount, inventorymoveId: 1, productId, unitmeasureId: product.unitmeasureId.id }, manager);
            }
        });
        return {
            saleComplet
        };
    }
    async findAll(queryparamssaleDto) {
        const { clientname, total, limit = 10, page = 1 } = queryparamssaleDto;
        const qb = this.saleRepository.createQueryBuilder('sales')
            .leftJoinAndSelect("sales.customerId", "customer")
            .orderBy("sales.createdAt", "DESC");
        if (clientname) {
            qb.andWhere(`LOWER(customer.name) LIKE :name`, { name: `%${clientname.toLowerCase()}%` });
        }
        if (total) {
            qb.andWhere(`sales.total =: total`, { total });
        }
        return await (0, find_helpers_1.getAllPaginated)(qb, { page, take: limit });
    }
    async findOne(id) {
        let sale;
        if (this.uuidAdapter.IsUUID(id)) {
            sale = await this.saleRepository.findOneBy({ id });
        }
        if (!sale)
            throw new common_1.BadRequestException(`La venta con id ${id} no existe`);
        return sale;
    }
    async findCustomersTop(queryparamsreporttopclientessaleDto) {
        const { startOfCurrentMonth, endOfCurrentMonth } = queryparamsreporttopclientessaleDto;
        const topCustomers = await this.dataSource
            .getRepository(sale_entity_1.Sale)
            .createQueryBuilder('sale')
            .select('sale.customerId', 'customerId')
            .addSelect('SUM(sale.total)', 'total_spent')
            .addSelect('COUNT(sale.id)', 'purchase_count')
            .addSelect('customer.name', 'customer_name')
            .addSelect('customer.nit', 'nit')
            .leftJoin(customer_entity_1.Customer, 'customer', 'customer.id = sale.customerId')
            .where('DATE(sale.createdAt) BETWEEN :startOfCurrentMonth AND :endOfCurrentMonth', {
            startOfCurrentMonth,
            endOfCurrentMonth,
        })
            .groupBy('sale.customerId, customer.name, customer.nit')
            .orderBy('total_spent', 'DESC')
            .limit(5)
            .getRawMany();
        return topCustomers;
    }
    async revertSale(saleId) {
        await this.dataSource.transaction(async (manager) => {
            const sale = await manager.findOne(sale_entity_1.Sale, { where: { id: saleId } });
            if (!sale)
                throw new common_1.NotFoundException(`Venta con ID ${saleId} no encontrada`);
            const { salesdetails } = await this.salesdetailservice.findOne(sale.id);
            for (const detail of salesdetails) {
                const { productId, amount } = detail;
                const product = await this.productsservice.findOne(productId.id);
                const newStock = product.stock + amount;
                await this.productsservice.update(productId.id, {
                    ...product,
                    unitmeasureId: Number(product.unitmeasureId.id),
                    stock: newStock
                }, manager);
                await this.inventoryproductservice.inventoryAdjustment({ amount: amount, inventorymoveId: 3, productId: productId.id, unitmeasureId: product.unitmeasureId.id }, manager);
            }
            await manager.delete(salesdetail_entity_1.Salesdetail, { saleId: sale.id });
            await manager.delete(sale_entity_1.Sale, { id: saleId });
        });
    }
};
exports.SalesService = SalesService;
exports.SalesService = SalesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(sale_entity_1.Sale)),
    __param(5, (0, typeorm_1.InjectDataSource)()),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        salesdetail_service_1.SalesdetailService,
        customers_service_1.CustomersService,
        products_service_1.ProductsService,
        inventoryproduct_service_1.InventoryproductService,
        typeorm_2.DataSource,
        adapters_1.HandleDBErrors,
        adapters_1.UuidAdapter])
], SalesService);
//# sourceMappingURL=sales.service.js.map