"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsModule = void 0;
const common_1 = require("@nestjs/common");
const products_service_1 = require("./products.service");
const products_controller_1 = require("./products.controller");
const adapters_1 = require("../common/adapters");
const typeorm_1 = require("@nestjs/typeorm");
const product_entity_1 = require("./entities/product.entity");
const unitmeasure_module_1 = require("../unitmeasure/unitmeasure.module");
const auth_module_1 = require("../auth/auth.module");
let ProductsModule = class ProductsModule {
};
exports.ProductsModule = ProductsModule;
exports.ProductsModule = ProductsModule = __decorate([
    (0, common_1.Module)({
        controllers: [products_controller_1.ProductsController],
        providers: [products_service_1.ProductsService, adapters_1.UuidAdapter, adapters_1.HandleDBErrors],
        imports: [typeorm_1.TypeOrmModule.forFeature([product_entity_1.Product]), unitmeasure_module_1.UnitmeasureModule, auth_module_1.AuthModule],
        exports: [typeorm_1.TypeOrmModule, products_service_1.ProductsService]
    })
], ProductsModule);
//# sourceMappingURL=products.module.js.map