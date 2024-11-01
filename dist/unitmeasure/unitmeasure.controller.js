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
exports.UnitmeasureController = void 0;
const common_1 = require("@nestjs/common");
const unitmeasure_service_1 = require("./unitmeasure.service");
const create_unitmeasure_dto_1 = require("./dto/create-unitmeasure.dto");
const update_unitmeasure_dto_1 = require("./dto/update-unitmeasure.dto");
const query_params_unitmeasure_dto_1 = require("./dto/query-params-unitmeasure.dto");
const decorators_1 = require("../auth/decorators");
let UnitmeasureController = class UnitmeasureController {
    constructor(unitmeasureService) {
        this.unitmeasureService = unitmeasureService;
    }
    create(createUnitmeasureDto) {
        return this.unitmeasureService.create(createUnitmeasureDto);
    }
    findAll(queryparams) {
        return this.unitmeasureService.findAll(queryparams);
    }
    findOne(term) {
        return this.unitmeasureService.findOne(term);
    }
    update(id, updateUnitmeasureDto) {
        return this.unitmeasureService.update(+id, updateUnitmeasureDto);
    }
    remove(id) {
        return this.unitmeasureService.remove(id);
    }
};
exports.UnitmeasureController = UnitmeasureController;
__decorate([
    (0, common_1.Post)(),
    (0, decorators_1.Auth)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_unitmeasure_dto_1.CreateUnitmeasureDto]),
    __metadata("design:returntype", void 0)
], UnitmeasureController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, decorators_1.Auth)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [query_params_unitmeasure_dto_1.QueryParamsUnitmeasureDto]),
    __metadata("design:returntype", void 0)
], UnitmeasureController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':term'),
    (0, decorators_1.Auth)(),
    __param(0, (0, common_1.Param)('term')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UnitmeasureController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, decorators_1.Auth)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_unitmeasure_dto_1.UpdateUnitmeasureDto]),
    __metadata("design:returntype", void 0)
], UnitmeasureController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, decorators_1.Auth)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UnitmeasureController.prototype, "remove", null);
exports.UnitmeasureController = UnitmeasureController = __decorate([
    (0, common_1.Controller)('unitmeasure'),
    __metadata("design:paramtypes", [unitmeasure_service_1.UnitmeasureService])
], UnitmeasureController);
//# sourceMappingURL=unitmeasure.controller.js.map