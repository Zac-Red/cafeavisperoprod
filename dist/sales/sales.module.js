"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesModule = void 0;
const common_1 = require("@nestjs/common");
const sales_service_1 = require("./sales.service");
const sales_controller_1 = require("./sales.controller");
const typeorm_1 = require("@nestjs/typeorm");
const sale_entity_1 = require("./entities/sale.entity");
const salesdetail_module_1 = require("../salesdetail/salesdetail.module");
const customers_module_1 = require("../customers/customers.module");
const products_module_1 = require("../products/products.module");
const inventoryproduct_module_1 = require("../inventoryproduct/inventoryproduct.module");
const adapters_1 = require("../common/adapters");
const auth_module_1 = require("../auth/auth.module");
let SalesModule = class SalesModule {
};
exports.SalesModule = SalesModule;
exports.SalesModule = SalesModule = __decorate([
    (0, common_1.Module)({
        controllers: [sales_controller_1.SalesController],
        providers: [sales_service_1.SalesService, adapters_1.HandleDBErrors, adapters_1.UuidAdapter],
        imports: [typeorm_1.TypeOrmModule.forFeature([sale_entity_1.Sale]), (0, common_1.forwardRef)(() => salesdetail_module_1.SalesdetailModule),
            customers_module_1.CustomersModule, products_module_1.ProductsModule, inventoryproduct_module_1.InventoryproductModule, auth_module_1.AuthModule],
        exports: [typeorm_1.TypeOrmModule, sales_service_1.SalesService]
    })
], SalesModule);
//# sourceMappingURL=sales.module.js.map