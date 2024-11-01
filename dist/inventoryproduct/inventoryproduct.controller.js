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
exports.InventoryproductController = void 0;
const common_1 = require("@nestjs/common");
const inventoryproduct_service_1 = require("./inventoryproduct.service");
const query_params_inventoryproducts_dto_1 = require("./dto/query-params-inventoryproducts.dto");
const decorators_1 = require("../auth/decorators");
let InventoryproductController = class InventoryproductController {
    constructor(inventoryproductService) {
        this.inventoryproductService = inventoryproductService;
    }
    findAll(queryparams) {
        return this.inventoryproductService.findAll(queryparams);
    }
};
exports.InventoryproductController = InventoryproductController;
__decorate([
    (0, common_1.Get)(),
    (0, decorators_1.Auth)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [query_params_inventoryproducts_dto_1.QueryParamsInventoryProductDto]),
    __metadata("design:returntype", void 0)
], InventoryproductController.prototype, "findAll", null);
exports.InventoryproductController = InventoryproductController = __decorate([
    (0, common_1.Controller)('inventoryproduct'),
    __metadata("design:paramtypes", [inventoryproduct_service_1.InventoryproductService])
], InventoryproductController);
//# sourceMappingURL=inventoryproduct.controller.js.map