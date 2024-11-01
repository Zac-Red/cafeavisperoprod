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
exports.RefinerawmaterialController = void 0;
const common_1 = require("@nestjs/common");
const refinerawmaterial_service_1 = require("./refinerawmaterial.service");
const create_refinerawmaterial_dto_1 = require("./dto/create-refinerawmaterial.dto");
const query_params_refinerawmaterial_dto_1 = require("./dto/query-params-refinerawmaterial.dto");
const decorators_1 = require("../auth/decorators");
const interfaces_1 = require("../auth/interfaces");
let RefinerawmaterialController = class RefinerawmaterialController {
    constructor(refinerawmaterialService) {
        this.refinerawmaterialService = refinerawmaterialService;
    }
    create(createRefinerawmaterialDto) {
        return this.refinerawmaterialService.create(createRefinerawmaterialDto);
    }
    findAll(queryparams) {
        return this.refinerawmaterialService.findAll(queryparams);
    }
    revertRefineRaw(refineId) {
        return this.refinerawmaterialService.revertRefinement(refineId);
    }
};
exports.RefinerawmaterialController = RefinerawmaterialController;
__decorate([
    (0, common_1.Post)(),
    (0, decorators_1.Auth)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_refinerawmaterial_dto_1.CreateRefinerawmaterialDto]),
    __metadata("design:returntype", void 0)
], RefinerawmaterialController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, decorators_1.Auth)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [query_params_refinerawmaterial_dto_1.QueryParamsRefineRawMaterialDto]),
    __metadata("design:returntype", void 0)
], RefinerawmaterialController.prototype, "findAll", null);
__decorate([
    (0, common_1.Put)(":refineId"),
    (0, decorators_1.Auth)(interfaces_1.ValidRoles.SuperUser),
    __param(0, (0, common_1.Param)('refineId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RefinerawmaterialController.prototype, "revertRefineRaw", null);
exports.RefinerawmaterialController = RefinerawmaterialController = __decorate([
    (0, common_1.Controller)('refinerawmaterial'),
    __metadata("design:paramtypes", [refinerawmaterial_service_1.RefinerawmaterialService])
], RefinerawmaterialController);
//# sourceMappingURL=refinerawmaterial.controller.js.map