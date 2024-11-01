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
exports.ProductionsController = void 0;
const common_1 = require("@nestjs/common");
const productions_service_1 = require("./productions.service");
const create_production_dto_1 = require("./dto/create-production.dto");
const query_params_productions_dto_1 = require("./dto/query-params-productions.dto");
const decorators_1 = require("../auth/decorators");
const interfaces_1 = require("../auth/interfaces");
let ProductionsController = class ProductionsController {
    constructor(productionsService) {
        this.productionsService = productionsService;
    }
    create(createProductionDto) {
        return this.productionsService.create(createProductionDto);
    }
    findAll(queryparams) {
        return this.productionsService.findAll(queryparams);
    }
    revertProduction(productionId) {
        return this.productionsService.revertProduction(productionId);
    }
    findProductTopProductions(queryparams) {
        return this.productionsService.findTopProductProduction(queryparams);
    }
};
exports.ProductionsController = ProductionsController;
__decorate([
    (0, common_1.Post)(),
    (0, decorators_1.Auth)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_production_dto_1.CreateProductionDto]),
    __metadata("design:returntype", void 0)
], ProductionsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, decorators_1.Auth)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [query_params_productions_dto_1.QueryParamsProductionsDto]),
    __metadata("design:returntype", void 0)
], ProductionsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Put)(":productionId"),
    (0, decorators_1.Auth)(interfaces_1.ValidRoles.SuperUser),
    __param(0, (0, common_1.Param)('productionId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductionsController.prototype, "revertProduction", null);
__decorate([
    (0, common_1.Get)('/topproductions'),
    (0, decorators_1.Auth)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [query_params_productions_dto_1.QueryParamsReportTopProductsProductionsDto]),
    __metadata("design:returntype", void 0)
], ProductionsController.prototype, "findProductTopProductions", null);
exports.ProductionsController = ProductionsController = __decorate([
    (0, common_1.Controller)('productions'),
    __metadata("design:paramtypes", [productions_service_1.ProductionsService])
], ProductionsController);
//# sourceMappingURL=productions.controller.js.map