"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipproductionModule = void 0;
const common_1 = require("@nestjs/common");
const recipproduction_service_1 = require("./recipproduction.service");
const recipproduction_controller_1 = require("./recipproduction.controller");
const typeorm_1 = require("@nestjs/typeorm");
const recipproduction_entity_1 = require("./entities/recipproduction.entity");
const adapters_1 = require("../common/adapters");
const products_module_1 = require("../products/products.module");
const rawmaterial_module_1 = require("../rawmaterial/rawmaterial.module");
const detailproduction_module_1 = require("../detailproduction/detailproduction.module");
const unitmeasure_module_1 = require("../unitmeasure/unitmeasure.module");
const auth_module_1 = require("../auth/auth.module");
let RecipproductionModule = class RecipproductionModule {
};
exports.RecipproductionModule = RecipproductionModule;
exports.RecipproductionModule = RecipproductionModule = __decorate([
    (0, common_1.Module)({
        controllers: [recipproduction_controller_1.RecipproductionController],
        providers: [recipproduction_service_1.RecipproductionService, adapters_1.HandleDBErrors, adapters_1.UuidAdapter],
        imports: [typeorm_1.TypeOrmModule.forFeature([recipproduction_entity_1.Recipproduction]), products_module_1.ProductsModule,
            rawmaterial_module_1.RawmaterialModule, unitmeasure_module_1.UnitmeasureModule, (0, common_1.forwardRef)(() => detailproduction_module_1.DetailproductionModule),
            auth_module_1.AuthModule],
        exports: [typeorm_1.TypeOrmModule, recipproduction_service_1.RecipproductionService]
    })
], RecipproductionModule);
//# sourceMappingURL=recipproduction.module.js.map