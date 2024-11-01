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
exports.DepartamentsController = void 0;
const common_1 = require("@nestjs/common");
const departaments_service_1 = require("./departaments.service");
const create_departament_dto_1 = require("./dto/create-departament.dto");
const update_departament_dto_1 = require("./dto/update-departament.dto");
let DepartamentsController = class DepartamentsController {
    constructor(departamentsService) {
        this.departamentsService = departamentsService;
    }
    create(createDepartamentDto) {
        return this.departamentsService.create(createDepartamentDto);
    }
    findAll() {
        return this.departamentsService.findAll();
    }
    findOne(term) {
        return this.departamentsService.findOne(term);
    }
    update(id, updateDepartamentDto) {
        return this.departamentsService.update(id, updateDepartamentDto);
    }
    remove(id) {
        return this.departamentsService.remove(id);
    }
};
exports.DepartamentsController = DepartamentsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_departament_dto_1.CreateDepartamentDto]),
    __metadata("design:returntype", void 0)
], DepartamentsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DepartamentsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':term'),
    __param(0, (0, common_1.Param)('term')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DepartamentsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_departament_dto_1.UpdateDepartamentDto]),
    __metadata("design:returntype", void 0)
], DepartamentsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DepartamentsController.prototype, "remove", null);
exports.DepartamentsController = DepartamentsController = __decorate([
    (0, common_1.Controller)('departaments'),
    __metadata("design:paramtypes", [departaments_service_1.DepartamentsService])
], DepartamentsController);
//# sourceMappingURL=departaments.controller.js.map