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
exports.DetailproductionController = void 0;
const common_1 = require("@nestjs/common");
const detailproduction_service_1 = require("./detailproduction.service");
const decorators_1 = require("../auth/decorators");
let DetailproductionController = class DetailproductionController {
    constructor(detailproductionService) {
        this.detailproductionService = detailproductionService;
    }
    findOne(term) {
        return this.detailproductionService.findOne(term);
    }
};
exports.DetailproductionController = DetailproductionController;
__decorate([
    (0, common_1.Get)(':term'),
    (0, decorators_1.Auth)(),
    __param(0, (0, common_1.Param)('term')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DetailproductionController.prototype, "findOne", null);
exports.DetailproductionController = DetailproductionController = __decorate([
    (0, common_1.Controller)('detailproduction'),
    __metadata("design:paramtypes", [detailproduction_service_1.DetailproductionService])
], DetailproductionController);
//# sourceMappingURL=detailproduction.controller.js.map