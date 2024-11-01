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
exports.RawmaterialController = void 0;
const common_1 = require("@nestjs/common");
const rawmaterial_service_1 = require("./rawmaterial.service");
const create_rawmaterial_dto_1 = require("./dto/create-rawmaterial.dto");
const update_rawmaterial_dto_1 = require("./dto/update-rawmaterial.dto");
const query_params_dto_1 = require("./dto/query-params.dto");
const decorators_1 = require("../auth/decorators");
let RawmaterialController = class RawmaterialController {
    constructor(rawmaterialService) {
        this.rawmaterialService = rawmaterialService;
    }
    create(createRawmaterialDto) {
        return this.rawmaterialService.create(createRawmaterialDto);
    }
    findAll(QueryParams) {
        return this.rawmaterialService.findAll(QueryParams);
    }
    reportTopRawMaterialShopping(queryparams) {
        return this.rawmaterialService.findTopRawMaterialShopping(queryparams);
    }
    findOne(id) {
        return this.rawmaterialService.findOne(id);
    }
    update(id, updateRawmaterialDto) {
        return this.rawmaterialService.update(id, updateRawmaterialDto);
    }
    remove(id) {
        return this.rawmaterialService.remove(id);
    }
};
exports.RawmaterialController = RawmaterialController;
__decorate([
    (0, common_1.Post)(),
    (0, decorators_1.Auth)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_rawmaterial_dto_1.CreateRawmaterialDto]),
    __metadata("design:returntype", void 0)
], RawmaterialController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, decorators_1.Auth)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [query_params_dto_1.QueryParamsRawMaterials]),
    __metadata("design:returntype", void 0)
], RawmaterialController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)("toprawmaterialshopping"),
    (0, decorators_1.Auth)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [query_params_dto_1.QueryParamsReportTopRawmaterialShoppDto]),
    __metadata("design:returntype", void 0)
], RawmaterialController.prototype, "reportTopRawMaterialShopping", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, decorators_1.Auth)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RawmaterialController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, decorators_1.Auth)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_rawmaterial_dto_1.UpdateRawmaterialDto]),
    __metadata("design:returntype", void 0)
], RawmaterialController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, decorators_1.Auth)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RawmaterialController.prototype, "remove", null);
exports.RawmaterialController = RawmaterialController = __decorate([
    (0, common_1.Controller)('rawmaterial'),
    __metadata("design:paramtypes", [rawmaterial_service_1.RawmaterialService])
], RawmaterialController);
//# sourceMappingURL=rawmaterial.controller.js.map