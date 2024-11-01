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
exports.ShoppingdetailService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const shoppingdetail_entity_1 = require("./entities/shoppingdetail.entity");
const adapters_1 = require("../common/adapters");
const create_helper_1 = require("../common/helpers/create.helper");
const typeorm_2 = require("typeorm");
const shopping_service_1 = require("../shopping/shopping.service");
let ShoppingdetailService = class ShoppingdetailService {
    constructor(shoppingdetailRepository, shoppingservice, DBErrors, uuidAdapter) {
        this.shoppingdetailRepository = shoppingdetailRepository;
        this.shoppingservice = shoppingservice;
        this.DBErrors = DBErrors;
        this.uuidAdapter = uuidAdapter;
    }
    async create(createShoppingdetailDto, manager) {
        try {
            return await (0, create_helper_1.createRegisterForTransaction)({ ...createShoppingdetailDto }, manager, shoppingdetail_entity_1.ShoppingDetail);
        }
        catch (error) {
            this.DBErrors.exceptionsDB(error);
        }
    }
    async findOne(term) {
        let shoppingdetails;
        let shopping;
        if (this.uuidAdapter.IsUUID(term)) {
            shopping = await this.shoppingservice.findOne(term);
            const queryBuilder = this.shoppingdetailRepository.createQueryBuilder('shoppingdetail')
                .leftJoinAndSelect("shoppingdetail.rawmaterialId", "rawmaterial")
                .leftJoinAndSelect("rawmaterial.unitmeasureId", "unitmeasure");
            shoppingdetails = await queryBuilder.where("shoppingdetail.shoppingId =:shoppingId", { shoppingId: term }).getMany();
        }
        if (!shoppingdetails)
            throw new common_1.BadRequestException(`No existe detalles con el ID de compra  ${term}`);
        return { shopping, shoppingdetails };
    }
    remove(id) {
        return `This action removes a #${id} shoppingdetail`;
    }
};
exports.ShoppingdetailService = ShoppingdetailService;
exports.ShoppingdetailService = ShoppingdetailService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(shoppingdetail_entity_1.ShoppingDetail)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => shopping_service_1.ShoppingService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        shopping_service_1.ShoppingService,
        adapters_1.HandleDBErrors,
        adapters_1.UuidAdapter])
], ShoppingdetailService);
//# sourceMappingURL=shoppingdetail.service.js.map