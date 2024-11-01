"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const departaments_module_1 = require("./departaments/departaments.module");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const common_module_1 = require("./common/common.module");
const suppliers_module_1 = require("./suppliers/suppliers.module");
const auth_module_1 = require("./auth/auth.module");
const products_module_1 = require("./products/products.module");
const sales_module_1 = require("./sales/sales.module");
const customers_module_1 = require("./customers/customers.module");
const shopping_module_1 = require("./shopping/shopping.module");
const rawmaterial_module_1 = require("./rawmaterial/rawmaterial.module");
const roles_module_1 = require("./roles/roles.module");
const unitmeasure_module_1 = require("./unitmeasure/unitmeasure.module");
const inventorymoves_module_1 = require("./inventorymoves/inventorymoves.module");
const inventoryrawmaterial_module_1 = require("./inventoryrawmaterial/inventoryrawmaterial.module");
const salesdetail_module_1 = require("./salesdetail/salesdetail.module");
const shoppingdetail_module_1 = require("./shoppingdetail/shoppingdetail.module");
const inventoryproduct_module_1 = require("./inventoryproduct/inventoryproduct.module");
const productions_module_1 = require("./productions/productions.module");
const recipproduction_module_1 = require("./recipproduction/recipproduction.module");
const detailproduction_module_1 = require("./detailproduction/detailproduction.module");
const refinerawmaterial_module_1 = require("./refinerawmaterial/refinerawmaterial.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: process.env.DB_HOST,
                database: process.env.DB_NAME,
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                port: +process.env.DB_PORT,
                autoLoadEntities: true,
                synchronize: true,
                extra: {
                    options: '-c timezone=America/Guatemala',
                },
            }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', 'public'),
            }),
            auth_module_1.AuthModule,
            common_module_1.CommonModule,
            customers_module_1.CustomersModule,
            departaments_module_1.DepartamentsModule,
            inventorymoves_module_1.InventorymovesModule,
            inventoryrawmaterial_module_1.InventoryrawmaterialModule,
            products_module_1.ProductsModule,
            rawmaterial_module_1.RawmaterialModule,
            roles_module_1.RolesModule,
            sales_module_1.SalesModule,
            salesdetail_module_1.SalesdetailModule,
            shopping_module_1.ShoppingModule,
            shoppingdetail_module_1.ShoppingdetailModule,
            suppliers_module_1.SuppliersModule,
            unitmeasure_module_1.UnitmeasureModule,
            inventoryproduct_module_1.InventoryproductModule,
            productions_module_1.ProductionsModule,
            recipproduction_module_1.RecipproductionModule,
            detailproduction_module_1.DetailproductionModule,
            refinerawmaterial_module_1.RefinerawmaterialModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map