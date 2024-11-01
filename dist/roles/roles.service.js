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
exports.RolesService = void 0;
const common_1 = require("@nestjs/common");
const role_entity_1 = require("./entities/role.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const adapters_1 = require("../common/adapters");
const create_helper_1 = require("../common/helpers/create.helper");
let RolesService = class RolesService {
    constructor(roleRepository, DBErrors) {
        this.roleRepository = roleRepository;
        this.DBErrors = DBErrors;
    }
    async create(createRoleDto) {
        try {
            return await (0, create_helper_1.createRegister)(this.roleRepository, createRoleDto);
        }
        catch (error) {
            this.DBErrors.exceptionsDB(error);
        }
    }
    async findAll() {
        return await this.roleRepository.find();
    }
    findOne(id) {
        return `This action returns a #${id} role`;
    }
    update(id, updateRoleDto) {
        return `This action updates a #${id} role`;
    }
    remove(id) {
        return `This action removes a #${id} role`;
    }
};
exports.RolesService = RolesService;
exports.RolesService = RolesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(role_entity_1.Role)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        adapters_1.HandleDBErrors])
], RolesService);
//# sourceMappingURL=roles.service.js.map