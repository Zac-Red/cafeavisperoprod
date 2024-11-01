"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventorymovesModule = void 0;
const common_1 = require("@nestjs/common");
const inventorymoves_service_1 = require("./inventorymoves.service");
const inventorymoves_controller_1 = require("./inventorymoves.controller");
const typeorm_1 = require("@nestjs/typeorm");
const inventorymove_entity_1 = require("./entities/inventorymove.entity");
const adapters_1 = require("../common/adapters");
const auth_module_1 = require("../auth/auth.module");
let InventorymovesModule = class InventorymovesModule {
};
exports.InventorymovesModule = InventorymovesModule;
exports.InventorymovesModule = InventorymovesModule = __decorate([
    (0, common_1.Module)({
        controllers: [inventorymoves_controller_1.InventorymovesController],
        providers: [inventorymoves_service_1.InventorymovesService, adapters_1.HandleDBErrors],
        imports: [typeorm_1.TypeOrmModule.forFeature([inventorymove_entity_1.Inventorymove]), auth_module_1.AuthModule],
        exports: [typeorm_1.TypeOrmModule, inventorymoves_service_1.InventorymovesService]
    })
], InventorymovesModule);
//# sourceMappingURL=inventorymoves.module.js.map