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
exports.UnitmeasureService = void 0;
const common_1 = require("@nestjs/common");
const adapters_1 = require("../common/adapters");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const unitmeasure_entity_1 = require("./entities/unitmeasure.entity");
const create_helper_1 = require("../common/helpers/create.helper");
const find_helpers_1 = require("../common/helpers/find.helpers");
let UnitmeasureService = class UnitmeasureService {
    constructor(unitMeasureRepository, DBErrors) {
        this.unitMeasureRepository = unitMeasureRepository;
        this.DBErrors = DBErrors;
    }
    async create(createUnitmeasureDto) {
        try {
            return await (0, create_helper_1.createRegister)(this.unitMeasureRepository, { ...createUnitmeasureDto });
        }
        catch (error) {
            this.DBErrors.exceptionsDB(error);
        }
    }
    async findAll(queryparamsunitmeasureDto) {
        const { name, limit = 10, page = 1, deleted = false } = queryparamsunitmeasureDto;
        const qb = this.unitMeasureRepository.createQueryBuilder('unitmeasure');
        if (name) {
            qb.where(`LOWER(unitmeasure.name) LIKE :name`, { name: `%${name.toLowerCase()}%` });
        }
        return await (0, find_helpers_1.getAllPaginated)(qb, { page, take: limit });
    }
    async findOne(term) {
        let unitmeasure;
        let query = Number(term);
        if (!Number.isNaN(query)) {
            unitmeasure = await this.unitMeasureRepository.findOneBy({ id: query, deleted: false });
        }
        else {
            const queryBuilder = this.unitMeasureRepository.createQueryBuilder('unitmeasure');
            unitmeasure = await queryBuilder.where("LOWER(name) = LOWER(:name)", { name: term }).getOne();
        }
        if (!unitmeasure)
            throw new common_1.BadRequestException(`Unuidad de medida con ${term} no existe`);
        return unitmeasure;
    }
    async update(id, updateUnitmeasureDto) {
        const unitmeasure = await this.unitMeasureRepository.preload({ id, ...updateUnitmeasureDto });
        if (!unitmeasure)
            throw new common_1.NotFoundException(`Unidad de medida con id: ${id} no existe`);
        try {
            await this.unitMeasureRepository.save({ ...unitmeasure });
            let idUnitMeasure = String(id);
            return this.findOne(idUnitMeasure);
        }
        catch (error) {
            this.DBErrors.exceptionsDB(error);
        }
    }
    async remove(id) {
        const unitmeasure = await this.findOne(id);
        await this.unitMeasureRepository.save({ ...unitmeasure, deleted: true });
        return {
            message: "Unidad de medida eliminada"
        };
    }
};
exports.UnitmeasureService = UnitmeasureService;
exports.UnitmeasureService = UnitmeasureService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(unitmeasure_entity_1.Unitmeasure)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        adapters_1.HandleDBErrors])
], UnitmeasureService);
//# sourceMappingURL=unitmeasure.service.js.map