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
exports.DetailproductionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const detailproduction_entity_1 = require("./entities/detailproduction.entity");
const recipproduction_service_1 = require("../recipproduction/recipproduction.service");
const create_helper_1 = require("../common/helpers/create.helper");
const adapters_1 = require("../common/adapters");
let DetailproductionService = class DetailproductionService {
    constructor(detailproductionRepository, recipproductionservice, DBErrors, uuidAdapter) {
        this.detailproductionRepository = detailproductionRepository;
        this.recipproductionservice = recipproductionservice;
        this.DBErrors = DBErrors;
        this.uuidAdapter = uuidAdapter;
    }
    async create(createDetailproductionDto, manager) {
        try {
            return await (0, create_helper_1.createRegisterForTransaction)({ ...createDetailproductionDto }, manager, detailproduction_entity_1.Detailproduction);
        }
        catch (error) {
            this.DBErrors.exceptionsDB(error);
        }
    }
    async findOne(term) {
        let detailsproduction;
        let recipproduction;
        if (this.uuidAdapter.IsUUID(term)) {
            recipproduction = await this.recipproductionservice.findOne(term);
            const queryBuilder = this.detailproductionRepository.createQueryBuilder('productiondetail')
                .leftJoinAndSelect("productiondetail.unitmeasureId", "unitmeasureproduction")
                .leftJoinAndSelect("productiondetail.rawmaterialId", "rawmaterial")
                .leftJoinAndSelect("rawmaterial.unitmeasureId", "unitmeasureraw");
            detailsproduction = await queryBuilder.where("productiondetail.recipproductionId =:recipproductionId", { recipproductionId: term }).getMany();
        }
        else {
            recipproduction = await this.recipproductionservice.findOne(term);
            const queryBuilderdetails = this.detailproductionRepository.createQueryBuilder('productiondetail')
                .leftJoinAndSelect("productiondetail.recipproductionId", "recipproduction")
                .leftJoinAndSelect("productiondetail.unitmeasureId", "unitmeasureproduction")
                .leftJoinAndSelect("productiondetail.rawmaterialId", "rawmaterial")
                .leftJoinAndSelect("rawmaterial.unitmeasureId", "unitmeasureraw");
            detailsproduction = await queryBuilderdetails.where("recipproduction.name =:recipproduction", { recipproduction: term }).getMany();
        }
        if (!recipproduction)
            throw new common_1.BadRequestException(`Detalles de la recta ${term} no existe`);
        return {
            recipproduction,
            detailsproduction,
        };
    }
};
exports.DetailproductionService = DetailproductionService;
exports.DetailproductionService = DetailproductionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(detailproduction_entity_1.Detailproduction)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => recipproduction_service_1.RecipproductionService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        recipproduction_service_1.RecipproductionService,
        adapters_1.HandleDBErrors,
        adapters_1.UuidAdapter])
], DetailproductionService);
//# sourceMappingURL=detailproduction.service.js.map