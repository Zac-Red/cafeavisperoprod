"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingdetailModule = void 0;
const common_1 = require("@nestjs/common");
const shoppingdetail_service_1 = require("./shoppingdetail.service");
const shoppingdetail_controller_1 = require("./shoppingdetail.controller");
const typeorm_1 = require("@nestjs/typeorm");
const shoppingdetail_entity_1 = require("./entities/shoppingdetail.entity");
const adapters_1 = require("../common/adapters");
const shopping_module_1 = require("../shopping/shopping.module");
const auth_module_1 = require("../auth/auth.module");
let ShoppingdetailModule = class ShoppingdetailModule {
};
exports.ShoppingdetailModule = ShoppingdetailModule;
exports.ShoppingdetailModule = ShoppingdetailModule = __decorate([
    (0, common_1.Module)({
        controllers: [shoppingdetail_controller_1.ShoppingdetailController],
        providers: [shoppingdetail_service_1.ShoppingdetailService, adapters_1.HandleDBErrors, adapters_1.UuidAdapter],
        imports: [typeorm_1.TypeOrmModule.forFeature([shoppingdetail_entity_1.ShoppingDetail]), auth_module_1.AuthModule,
            (0, common_1.forwardRef)(() => shopping_module_1.ShoppingModule)],
        exports: [typeorm_1.TypeOrmModule, shoppingdetail_service_1.ShoppingdetailService]
    })
], ShoppingdetailModule);
//# sourceMappingURL=shoppingdetail.module.js.map