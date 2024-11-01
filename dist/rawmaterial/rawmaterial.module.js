"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RawmaterialModule = void 0;
const common_1 = require("@nestjs/common");
const rawmaterial_service_1 = require("./rawmaterial.service");
const rawmaterial_controller_1 = require("./rawmaterial.controller");
const typeorm_1 = require("@nestjs/typeorm");
const rawmaterial_entity_1 = require("./entities/rawmaterial.entity");
const adapters_1 = require("../common/adapters");
const suppliers_module_1 = require("../suppliers/suppliers.module");
const unitmeasure_module_1 = require("../unitmeasure/unitmeasure.module");
const auth_module_1 = require("../auth/auth.module");
let RawmaterialModule = class RawmaterialModule {
};
exports.RawmaterialModule = RawmaterialModule;
exports.RawmaterialModule = RawmaterialModule = __decorate([
    (0, common_1.Module)({
        controllers: [rawmaterial_controller_1.RawmaterialController],
        providers: [rawmaterial_service_1.RawmaterialService, adapters_1.HandleDBErrors, adapters_1.UuidAdapter],
        imports: [typeorm_1.TypeOrmModule.forFeature([rawmaterial_entity_1.Rawmaterial]), suppliers_module_1.SuppliersModule,
            unitmeasure_module_1.UnitmeasureModule, auth_module_1.AuthModule],
        exports: [typeorm_1.TypeOrmModule, rawmaterial_service_1.RawmaterialService]
    })
], RawmaterialModule);
//# sourceMappingURL=rawmaterial.module.js.map