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
exports.ShoppingController = void 0;
const common_1 = require("@nestjs/common");
const shopping_service_1 = require("./shopping.service");
const create_shopping_dto_1 = require("./dto/create-shopping.dto");
const query_params_shopping_dto_1 = require("./dto/query-params-shopping.dto");
const decorators_1 = require("../auth/decorators");
const interfaces_1 = require("../auth/interfaces");
let ShoppingController = class ShoppingController {
    constructor(shoppingService) {
        this.shoppingService = shoppingService;
    }
    create(createShoppingDto) {
        return this.shoppingService.create(createShoppingDto);
    }
    findAll(queryparams) {
        return this.shoppingService.findAll(queryparams);
    }
    findOne(id) {
        return this.shoppingService.findOne(id);
    }
    revertShopping(shoppingId) {
        return this.shoppingService.revertShopping(shoppingId);
    }
};
exports.ShoppingController = ShoppingController;
__decorate([
    (0, common_1.Post)(),
    (0, decorators_1.Auth)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_shopping_dto_1.CreateShoppingDto]),
    __metadata("design:returntype", void 0)
], ShoppingController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, decorators_1.Auth)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [query_params_shopping_dto_1.QueryParamsShoppingDto]),
    __metadata("design:returntype", void 0)
], ShoppingController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, decorators_1.Auth)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ShoppingController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(":shoppingId"),
    (0, decorators_1.Auth)(interfaces_1.ValidRoles.SuperUser),
    __param(0, (0, common_1.Param)('shoppingId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ShoppingController.prototype, "revertShopping", null);
exports.ShoppingController = ShoppingController = __decorate([
    (0, common_1.Controller)('shopping'),
    __metadata("design:paramtypes", [shopping_service_1.ShoppingService])
], ShoppingController);
//# sourceMappingURL=shopping.controller.js.map