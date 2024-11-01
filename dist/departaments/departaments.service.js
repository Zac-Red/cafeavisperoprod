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
exports.DepartamentsService = void 0;
const departament_entity_1 = require("./entities/departament.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const uuid_1 = require("uuid");
let DepartamentsService = class DepartamentsService {
    constructor(departamentRepository) {
        this.departamentRepository = departamentRepository;
    }
    async create(createDepartamentDto) {
        try {
            const { name } = createDepartamentDto;
            const departament = this.departamentRepository.create({ name });
            await this.departamentRepository.save(departament);
            return { name };
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    async findAll() {
        const departamentos = await this.departamentRepository.find({
            where: { deleted: false }
        });
        return departamentos;
    }
    async findOne(term) {
        let departament;
        if ((0, uuid_1.validate)(term)) {
            departament = await this.departamentRepository.findOneBy({ id: term, deleted: false });
        }
        else {
            const queryBuilder = this.departamentRepository.createQueryBuilder('departament');
            departament = await queryBuilder
                .where("LOWER(name) = LOWER(:name) and deleted = :deleted", { name: term, deleted: false })
                .getOne();
        }
        if (!departament)
            throw new common_1.NotFoundException(`Departament with ${term} not found`);
        return departament;
    }
    async update(id, updateDepartamentDto) {
        const { name } = updateDepartamentDto;
        const departament = await this.findOne(id);
        try {
            await this.departamentRepository.save({ ...departament, name });
            return this.findOne(id);
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    async remove(id) {
        const departament = await this.findOne(id);
        await this.departamentRepository.save({ ...departament, deleted: true });
        return;
    }
};
exports.DepartamentsService = DepartamentsService;
exports.DepartamentsService = DepartamentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(departament_entity_1.Departament)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DepartamentsService);
//# sourceMappingURL=departaments.service.js.map