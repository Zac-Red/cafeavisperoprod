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
exports.RecipproductionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const recipproduction_entity_1 = require("./entities/recipproduction.entity");
const typeorm_2 = require("typeorm");
const adapters_1 = require("../common/adapters");
const products_service_1 = require("../products/products.service");
const rawmaterial_service_1 = require("../rawmaterial/rawmaterial.service");
const unitmeasure_service_1 = require("../unitmeasure/unitmeasure.service");
const detailproduction_service_1 = require("../detailproduction/detailproduction.service");
const find_helpers_1 = require("../common/helpers/find.helpers");
let RecipproductionService = class RecipproductionService {
    constructor(recipproductionRepository, productsservice, rawmaterialservice, unitmeasureservice, detailproductionservice, dataSource, DBErrors, uuidAdapter) {
        this.recipproductionRepository = recipproductionRepository;
        this.productsservice = productsservice;
        this.rawmaterialservice = rawmaterialservice;
        this.unitmeasureservice = unitmeasureservice;
        this.detailproductionservice = detailproductionservice;
        this.dataSource = dataSource;
        this.DBErrors = DBErrors;
        this.uuidAdapter = uuidAdapter;
    }
    async create(createRecipproductionDto) {
        const { productId, productiondetail, ...restdata } = createRecipproductionDto;
        let recipproductioncomplet;
        await this.dataSource.transaction(async (manager) => {
            const product = await this.productsservice.findOne(productId);
            try {
                const recipproduction = manager.create(recipproduction_entity_1.Recipproduction, { ...restdata, productId: product });
                recipproductioncomplet = await manager.save(recipproduction);
            }
            catch (error) {
                this.DBErrors.exceptionsDB(error);
            }
            if (productiondetail.length === 0)
                throw new common_1.BadRequestException(`No se recibieron los detalles de la receta`);
            for (const detail of productiondetail) {
                const { rawmaterialId, amount, unitmeasureId } = detail;
                const rawmaterial = await this.rawmaterialservice.findOne(rawmaterialId);
                const unitmeasure = await this.unitmeasureservice.findOne(String(unitmeasureId));
                await this.detailproductionservice.create({ rawmaterialId: rawmaterial.id,
                    amount,
                    unitmeasureId: unitmeasure.id,
                    recipproductionId: recipproductioncomplet.id }, manager);
            }
        });
        return {
            recipproductioncomplet
        };
    }
    async findAll(queryparamsrecipproductionDto) {
        const { limit = 10, page = 1, name, product } = queryparamsrecipproductionDto;
        const qb = this.recipproductionRepository.createQueryBuilder('recipproduction')
            .leftJoinAndSelect("recipproduction.productId", "product")
            .leftJoinAndSelect("product.unitmeasureId", "unitmeasure")
            .orderBy("recipproduction.id", "ASC");
        if (name) {
            qb.andWhere(`LOWER(recipproduction.name) LIKE :name`, { name: `%${name.toLowerCase()}%` });
        }
        if (product) {
            qb.andWhere(`LOWER(product.name) LIKE :name`, { name: `%${product.toLowerCase()}%` });
        }
        return await (0, find_helpers_1.getAllPaginated)(qb, { page, take: limit });
    }
    async findOne(term) {
        let recipproduction;
        if (this.uuidAdapter.IsUUID(term)) {
            recipproduction = await this.recipproductionRepository.findOneBy({ id: term });
        }
        else {
            const queryBuilder = this.recipproductionRepository.createQueryBuilder('recipproduction');
            recipproduction = await queryBuilder
                .where("LOWER(name) = LOWER(:name)", { name: term }).getOne();
        }
        if (!recipproduction)
            throw new common_1.BadRequestException(`Receta con ${term} no existe`);
        return recipproduction;
    }
};
exports.RecipproductionService = RecipproductionService;
exports.RecipproductionService = RecipproductionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(recipproduction_entity_1.Recipproduction)),
    __param(4, (0, common_1.Inject)((0, common_1.forwardRef)(() => detailproduction_service_1.DetailproductionService))),
    __param(5, (0, typeorm_1.InjectDataSource)()),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        products_service_1.ProductsService,
        rawmaterial_service_1.RawmaterialService,
        unitmeasure_service_1.UnitmeasureService,
        detailproduction_service_1.DetailproductionService,
        typeorm_2.DataSource,
        adapters_1.HandleDBErrors,
        adapters_1.UuidAdapter])
], RecipproductionService);
//# sourceMappingURL=recipproduction.service.js.map