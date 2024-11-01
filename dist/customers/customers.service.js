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
exports.CustomersService = void 0;
const common_1 = require("@nestjs/common");
const customer_entity_1 = require("./entities/customer.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const adapters_1 = require("../common/adapters");
const create_helper_1 = require("../common/helpers/create.helper");
const find_helpers_1 = require("../common/helpers/find.helpers");
let CustomersService = class CustomersService {
    constructor(customerRepository, uuidAdapter, DBErrors) {
        this.customerRepository = customerRepository;
        this.uuidAdapter = uuidAdapter;
        this.DBErrors = DBErrors;
    }
    async create(createCustomerDto) {
        try {
            return await (0, create_helper_1.createRegister)(this.customerRepository, createCustomerDto);
        }
        catch (error) {
            this.DBErrors.exceptionsDB(error);
        }
    }
    async findAll(queryparamscustomers) {
        const { limit = 10, page = 1, deleted = false, name, nit, phone } = queryparamscustomers;
        const qb = this.customerRepository.createQueryBuilder('customers');
        qb.where('customers.deleted = :deleted', { deleted: deleted });
        if (name) {
            qb.andWhere(`LOWER(customers.name) LIKE :name`, { name: `%${name.toLowerCase()}%` });
        }
        if (nit) {
            qb.andWhere(`customers.nit LIKE :nit`, { nit });
        }
        if (phone) {
            qb.andWhere(`customers.phone =:phone`, { phone: phone });
        }
        return await (0, find_helpers_1.getAllPaginated)(qb, { page, take: limit });
    }
    async findOne(term) {
        let customer;
        if (this.uuidAdapter.IsUUID(term)) {
            customer = await this.customerRepository.findOneBy({ id: term });
        }
        else {
            const queryBuilder = this.customerRepository.createQueryBuilder('costumers');
            customer = await queryBuilder
                .where("nit = :nit or LOWER(name) = LOWER(:name)", {
                nit: term,
                name: term
            }).getOne();
        }
        if (!customer)
            throw new common_1.BadRequestException(`Cliente con ${term} no encontrado`);
        return customer;
    }
    async update(id, updateCustomerDto) {
        const customer = await this.customerRepository.preload({ id, ...updateCustomerDto });
        if (!customer)
            throw new common_1.NotFoundException(`Customer con id ${id} no encontrado`);
        try {
            await this.customerRepository.save({ ...customer });
            return this.findOne(id);
        }
        catch (error) {
            this.DBErrors.exceptionsDB(error);
        }
    }
    async remove(id) {
        const customer = await this.findOne(id);
        await this.customerRepository.save({ ...customer, deleted: true });
        return {
            message: "Cliente eliminado"
        };
    }
};
exports.CustomersService = CustomersService;
exports.CustomersService = CustomersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(customer_entity_1.Customer)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        adapters_1.UuidAdapter,
        adapters_1.HandleDBErrors])
], CustomersService);
//# sourceMappingURL=customers.service.js.map