"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefinerawmaterialModule = void 0;
const common_1 = require("@nestjs/common");
const refinerawmaterial_service_1 = require("./refinerawmaterial.service");
const refinerawmaterial_controller_1 = require("./refinerawmaterial.controller");
const typeorm_1 = require("@nestjs/typeorm");
const refinerawmaterial_entity_1 = require("./entities/refinerawmaterial.entity");
const adapters_1 = require("../common/adapters");
const rawmaterial_module_1 = require("../rawmaterial/rawmaterial.module");
const conversionrawmaterial_entity_1 = require("./entities/conversionrawmaterial.entity");
const unitmeasure_module_1 = require("../unitmeasure/unitmeasure.module");
const inventoryrawmaterial_module_1 = require("../inventoryrawmaterial/inventoryrawmaterial.module");
const auth_module_1 = require("../auth/auth.module");
let RefinerawmaterialModule = class RefinerawmaterialModule {
};
exports.RefinerawmaterialModule = RefinerawmaterialModule;
exports.RefinerawmaterialModule = RefinerawmaterialModule = __decorate([
    (0, common_1.Module)({
        controllers: [refinerawmaterial_controller_1.RefinerawmaterialController],
        providers: [refinerawmaterial_service_1.RefinerawmaterialService, adapters_1.HandleDBErrors, adapters_1.UuidAdapter],
        imports: [typeorm_1.TypeOrmModule.forFeature([refinerawmaterial_entity_1.Refinerawmaterial, conversionrawmaterial_entity_1.Conversionrawmaterial]),
            rawmaterial_module_1.RawmaterialModule, unitmeasure_module_1.UnitmeasureModule, inventoryrawmaterial_module_1.InventoryrawmaterialModule, auth_module_1.AuthModule],
        exports: [typeorm_1.TypeOrmModule]
    })
], RefinerawmaterialModule);
//# sourceMappingURL=refinerawmaterial.module.js.map