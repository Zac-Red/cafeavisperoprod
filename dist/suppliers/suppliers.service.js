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
exports.SuppliersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const supplier_entity_1 = require("./entities/supplier.entity");
const typeorm_2 = require("typeorm");
const uui_adapter_1 = require("../common/adapters/uui.adapter");
const find_helpers_1 = require("../common/helpers/find.helpers");
const adapters_1 = require("../common/adapters");
const create_helper_1 = require("../common/helpers/create.helper");
let SuppliersService = class SuppliersService {
    constructor(suppliersRepository, uuidAdapter, DBErrors) {
        this.suppliersRepository = suppliersRepository;
        this.uuidAdapter = uuidAdapter;
        this.DBErrors = DBErrors;
    }
    async create(createSupplierDto) {
        try {
            return await (0, create_helper_1.createRegister)(this.suppliersRepository, createSupplierDto);
        }
        catch (error) {
            this.DBErrors.exceptionsDB(error);
        }
    }
    async findAll(queryparamssupplierDto) {
        const { namecontact, personeria, deleted = false, limit = 10, page = 1 } = queryparamssupplierDto;
        const qb = this.suppliersRepository.createQueryBuilder('supplier');
        qb.where('supplier.deleted = :deleted', { deleted: deleted });
        if (namecontact) {
            qb.andWhere(`LOWER(supplier.namecontact) LIKE :namecontact`, { namecontact: `%${namecontact.toLowerCase()}%` });
        }
        if (personeria) {
            qb.andWhere(`LOWER(supplier.personeria) LIKE :personeria`, { personeria: `%${personeria.toLowerCase()}%` });
        }
        return await (0, find_helpers_1.getAllPaginated)(qb, { page, take: limit });
    }
    async findOne(term) {
        let supplier;
        if (this.uuidAdapter.IsUUID(term)) {
            supplier = await this.suppliersRepository.findOneBy({ id: term, deleted: false });
        }
        else {
            const queryBuilder = this.suppliersRepository.createQueryBuilder('supl');
            supplier = await queryBuilder
                .where("LOWER(personeria) = LOWER(:personeria) and deleted =:deleted or LOWER(namecontact) = LOWER(:namecontact) and deleted =:deleted", {
                personeria: term,
                namecontact: term,
                deleted: false
            })
                .getOne();
        }
        if (!supplier)
            throw new common_1.BadRequestException(`El proveedor con ${term} no encontrado`);
        return supplier;
    }
    async update(id, updateSupplierDto) {
        const supplier = await this.suppliersRepository.preload({ id, ...updateSupplierDto });
        if (!supplier)
            throw new common_1.NotFoundException(`El proveedor con el id: ${id} no encontrado`);
        try {
            await this.suppliersRepository.save({ ...supplier });
            return this.findOne(id);
        }
        catch (error) {
            this.DBErrors.exceptionsDB(error);
        }
    }
    async remove(id) {
        const supplier = await this.findOne(id);
        await this.suppliersRepository.save({ ...supplier, deleted: true });
        return {
            message: "Proveedor eliminado"
        };
    }
};
exports.SuppliersService = SuppliersService;
exports.SuppliersService = SuppliersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(supplier_entity_1.Supplier)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        uui_adapter_1.UuidAdapter,
        adapters_1.HandleDBErrors])
], SuppliersService);
//# sourceMappingURL=suppliers.service.js.map