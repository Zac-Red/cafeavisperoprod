"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductionsModule = void 0;
const common_1 = require("@nestjs/common");
const productions_service_1 = require("./productions.service");
const productions_controller_1 = require("./productions.controller");
const typeorm_1 = require("@nestjs/typeorm");
const production_entity_1 = require("./entities/production.entity");
const adapters_1 = require("../common/adapters");
const products_module_1 = require("../products/products.module");
const rawmaterial_module_1 = require("../rawmaterial/rawmaterial.module");
const detailproduction_module_1 = require("../detailproduction/detailproduction.module");
const inventoryrawmaterial_module_1 = require("../inventoryrawmaterial/inventoryrawmaterial.module");
const inventoryproduct_module_1 = require("../inventoryproduct/inventoryproduct.module");
const auth_module_1 = require("../auth/auth.module");
let ProductionsModule = class ProductionsModule {
};
exports.ProductionsModule = ProductionsModule;
exports.ProductionsModule = ProductionsModule = __decorate([
    (0, common_1.Module)({
        controllers: [productions_controller_1.ProductionsController],
        providers: [productions_service_1.ProductionsService, adapters_1.HandleDBErrors, adapters_1.UuidAdapter],
        imports: [typeorm_1.TypeOrmModule.forFeature([production_entity_1.Production]), products_module_1.ProductsModule,
            rawmaterial_module_1.RawmaterialModule, detailproduction_module_1.DetailproductionModule, inventoryrawmaterial_module_1.InventoryrawmaterialModule,
            inventoryproduct_module_1.InventoryproductModule, auth_module_1.AuthModule],
        exports: [typeorm_1.TypeOrmModule]
    })
], ProductionsModule);
//# sourceMappingURL=productions.module.js.map