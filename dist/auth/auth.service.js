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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const jwt_1 = require("@nestjs/jwt");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
const user_entity_1 = require("./entities/user.entity");
const uui_adapter_1 = require("../common/adapters/uui.adapter");
const find_helpers_1 = require("../common/helpers/find.helpers");
const adapters_1 = require("../common/adapters");
const role_entity_1 = require("../roles/entities/role.entity");
let AuthService = class AuthService {
    constructor(userRepository, roleRepository, jwtService, uuidAdapter, DBErrors) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.jwtService = jwtService;
        this.uuidAdapter = uuidAdapter;
        this.DBErrors = DBErrors;
    }
    async create(createAuthDto) {
        const { password, roleId, ...userData } = createAuthDto;
        const role = await this.roleRepository.findOneBy({ id: roleId });
        if (!role)
            throw new common_1.BadRequestException(`Role con id ${roleId} no existe`);
        try {
            const user = this.userRepository.create({
                ...userData,
                roleId: role,
                password: bcrypt.hashSync(password, 10)
            });
            await this.userRepository.save(user);
            delete user.password;
            return {
                ...user,
            };
        }
        catch (error) {
            this.DBErrors.exceptionsDB(error);
        }
    }
    async login(loginuserDto) {
        const { password, email } = loginuserDto;
        const user = await this.userRepository.findOne({
            where: { email, IsActive: true, deleted: false },
            select: { email: true, password: true, id: true, firstname: true }
        });
        if (!user)
            throw new common_1.UnauthorizedException('Usuario o contraseña no validos');
        if (!bcrypt.compareSync(password, user.password))
            throw new common_1.UnauthorizedException('Usuario o contraseña no validos');
        const { firstname } = user;
        return {
            username: firstname,
            token: this.getJwtToken({ id: user.id, roleId: user.roleId.id })
        };
    }
    async checkAuthStatus(user) {
        return {
            token: this.getJwtToken({ id: user.id, roleId: user.roleId.id })
        };
    }
    getJwtToken(payload) {
        const token = this.jwtService.sign(payload);
        return token;
    }
    async findAll(queryparamsuserDto) {
        const { firstname, lastname, email, roles, IsActive, deleted = false, limit = 10, page = 1 } = queryparamsuserDto;
        const qb = this.userRepository.createQueryBuilder('user').leftJoinAndSelect("user.roleId", "role")
            .orderBy("user.id", "ASC");
        if (typeof (IsActive) === "boolean") {
            qb.where("user.IsActive =:IsActive", { IsActive: IsActive });
        }
        else {
            qb.where('user.deleted = :deleted', { deleted: deleted });
        }
        if (lastname) {
            qb.andWhere(`LOWER(user.lastname) LIKE :lastname`, { lastname: `%${lastname.toLowerCase()}%` });
        }
        if (firstname) {
            qb.andWhere(`LOWER(user.firstname) LIKE :firstname`, { firstname: `%${firstname.toLowerCase()}%` });
        }
        if (email) {
            qb.andWhere(`LOWER(user.email) LIKE :email`, { email: `%${email.toLowerCase()}%` });
        }
        if (roles) {
            qb.andWhere(`LOWER(role.role) LIKE :roles`, { roles: `%${roles.toLowerCase()}%` });
        }
        return await (0, find_helpers_1.getAllPaginated)(qb, { page, take: limit });
    }
    async findOne(term) {
        let user;
        if (this.uuidAdapter.IsUUID(term)) {
            user = await this.userRepository.findOneBy({ id: term });
        }
        else {
            const queryBuilder = this.userRepository.createQueryBuilder('user');
            user = await queryBuilder
                .where("LOWER(firstname) = LOWER(:firtsname) or LOWER(lastname) = LOWER(:lastname)", {
                firtsname: term,
                lastname: term,
            })
                .getOne();
        }
        if (!user)
            throw new common_1.BadRequestException(`Usuario con ${term} no existe`);
        return user;
    }
    async update(id, updateUserDto) {
        const { password, ...updateUserrestData } = updateUserDto;
        let updateDataUser = {};
        if (password) {
            updateDataUser = { id,
                password: bcrypt.hashSync(password, 10),
                ...updateUserrestData };
        }
        else {
            updateDataUser = updateUserDto;
        }
        const user = await this.userRepository.preload({ id, ...updateDataUser });
        if (!user)
            throw new common_1.NotFoundException(`Usuario con id: ${id} no existe`);
        try {
            await this.userRepository.save({ ...user });
            return this.findOne(id);
        }
        catch (error) {
            this.DBErrors.exceptionsDB(error);
        }
    }
    async remove(id) {
        const user = await this.findOne(id);
        await this.userRepository.save({ ...user, IsActive: false, deleted: true });
        return {
            message: "Usuario eliminado"
        };
    }
    async seedusercreate() {
        const defaultUser = {
            password: process.env.DEFAULT_ADMIN_PASSWORD,
            roleId: Number(process.env.DEFAULT_ADMIN_ROLE),
            dpi: Number(process.env.DEFAULT_ADMIN_DPI),
            email: process.env.DEFAULT_ADMIN_EMAIL,
            firstname: process.env.DEFAULT_ADMIN_FIRTSNAME,
            lastname: process.env.DEFAULT_ADMIN_LASTNAME,
            phone: Number(process.env.DEFAULT_ADMIN_PHONE)
        };
        const { roleId, password, ...restdata } = defaultUser;
        const role = await this.roleRepository.findOneBy({ id: Number(roleId) });
        if (!role)
            throw new common_1.BadRequestException(`Role con id ${defaultUser.roleId} no existe`);
        try {
            const user = this.userRepository.create({
                ...restdata,
                roleId: role,
                password: bcrypt.hashSync(password, 10)
            });
            await this.userRepository.save(user);
            delete user.password;
            return {
                ...user,
            };
        }
        catch (error) {
            this.DBErrors.exceptionsDB(error);
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(role_entity_1.Role)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        jwt_1.JwtService,
        uui_adapter_1.UuidAdapter,
        adapters_1.HandleDBErrors])
], AuthService);
//# sourceMappingURL=auth.service.js.map