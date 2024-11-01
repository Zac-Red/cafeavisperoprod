"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitmeasureModule = void 0;
const common_1 = require("@nestjs/common");
const unitmeasure_service_1 = require("./unitmeasure.service");
const unitmeasure_controller_1 = require("./unitmeasure.controller");
const adapters_1 = require("../common/adapters");
const typeorm_1 = require("@nestjs/typeorm");
const unitmeasure_entity_1 = require("./entities/unitmeasure.entity");
const auth_module_1 = require("../auth/auth.module");
let UnitmeasureModule = class UnitmeasureModule {
};
exports.UnitmeasureModule = UnitmeasureModule;
exports.UnitmeasureModule = UnitmeasureModule = __decorate([
    (0, common_1.Module)({
        controllers: [unitmeasure_controller_1.UnitmeasureController],
        providers: [unitmeasure_service_1.UnitmeasureService, adapters_1.HandleDBErrors],
        imports: [typeorm_1.TypeOrmModule.forFeature([unitmeasure_entity_1.Unitmeasure]), auth_module_1.AuthModule],
        exports: [typeorm_1.TypeOrmModule, unitmeasure_service_1.UnitmeasureService]
    })
], UnitmeasureModule);
//# sourceMappingURL=unitmeasure.module.js.map