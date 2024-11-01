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
exports.InventorymovesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const inventorymove_entity_1 = require("./entities/inventorymove.entity");
const typeorm_2 = require("typeorm");
const adapters_1 = require("../common/adapters");
const create_helper_1 = require("../common/helpers/create.helper");
const find_helpers_1 = require("../common/helpers/find.helpers");
let InventorymovesService = class InventorymovesService {
    constructor(inventoryMoveRepository, DBErrors) {
        this.inventoryMoveRepository = inventoryMoveRepository;
        this.DBErrors = DBErrors;
    }
    async create(createInventorymoveDto) {
        try {
            return await (0, create_helper_1.createRegister)(this.inventoryMoveRepository, { ...createInventorymoveDto });
        }
        catch (error) {
            this.DBErrors.exceptionsDB(error);
        }
    }
    async findAll(queryparamsinventorymoveDto) {
        const { name, limit = 10, page = 1, deleted = false } = queryparamsinventorymoveDto;
        const qb = this.inventoryMoveRepository.createQueryBuilder('inventorymove');
        qb.where('inventorymove.deleted = :deleted', { deleted: deleted });
        if (name) {
            qb.andWhere(`LOWER(inventorymove.name) LIKE :name`, { name: `%${name.toLowerCase()}%` });
        }
        return await (0, find_helpers_1.getAllPaginated)(qb, { page, take: limit });
    }
    async findOne(term) {
        let inventorymove;
        let query = Number(term);
        if (!Number.isNaN(query)) {
            inventorymove = await this.inventoryMoveRepository.findOneBy({ id: query });
        }
        else {
            const queryBuilder = this.inventoryMoveRepository.createQueryBuilder('inventorymove');
            inventorymove = await queryBuilder.where(`LOWER(inventorymove.name) LIKE :name`, { name: `%${term.toLowerCase()}%` }).getOne();
        }
        if (!inventorymove)
            throw new common_1.BadRequestException(`movimiento con ${term} no existe`);
        return inventorymove;
    }
    async update(id, updateInventorymoveDto) {
        const inventorymove = await this.inventoryMoveRepository.preload({ id, ...updateInventorymoveDto });
        if (!inventorymove)
            throw new common_1.NotFoundException(`movimiento de inventario con id: ${id} no existe`);
        try {
            await this.inventoryMoveRepository.save({ ...inventorymove });
            let idInventoryMove = String(id);
            return this.findOne(idInventoryMove);
        }
        catch (error) {
            this.DBErrors.exceptionsDB(error);
        }
    }
    async remove(id) {
        const inventorymove = await this.findOne(id);
        await this.inventoryMoveRepository.save({ ...inventorymove, deleted: true });
        return {
            message: "movimiento de inventario eliminado"
        };
    }
};
exports.InventorymovesService = InventorymovesService;
exports.InventorymovesService = InventorymovesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(inventorymove_entity_1.Inventorymove)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        adapters_1.HandleDBErrors])
], InventorymovesService);
//# sourceMappingURL=inventorymoves.service.js.map