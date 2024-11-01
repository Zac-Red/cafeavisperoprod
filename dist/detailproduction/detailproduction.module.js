"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetailproductionModule = void 0;
const common_1 = require("@nestjs/common");
const detailproduction_service_1 = require("./detailproduction.service");
const detailproduction_controller_1 = require("./detailproduction.controller");
const typeorm_1 = require("@nestjs/typeorm");
const detailproduction_entity_1 = require("./entities/detailproduction.entity");
const rawmaterial_module_1 = require("../rawmaterial/rawmaterial.module");
const recipproduction_module_1 = require("../recipproduction/recipproduction.module");
const adapters_1 = require("../common/adapters");
const auth_module_1 = require("../auth/auth.module");
let DetailproductionModule = class DetailproductionModule {
};
exports.DetailproductionModule = DetailproductionModule;
exports.DetailproductionModule = DetailproductionModule = __decorate([
    (0, common_1.Module)({
        controllers: [detailproduction_controller_1.DetailproductionController],
        providers: [detailproduction_service_1.DetailproductionService, adapters_1.HandleDBErrors, adapters_1.UuidAdapter],
        imports: [typeorm_1.TypeOrmModule.forFeature([detailproduction_entity_1.Detailproduction]), rawmaterial_module_1.RawmaterialModule,
            (0, common_1.forwardRef)(() => recipproduction_module_1.RecipproductionModule), auth_module_1.AuthModule],
        exports: [typeorm_1.TypeOrmModule, detailproduction_service_1.DetailproductionService]
    })
], DetailproductionModule);
//# sourceMappingURL=detailproduction.module.js.map