"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryrawmaterialModule = void 0;
const common_1 = require("@nestjs/common");
const inventoryrawmaterial_service_1 = require("./inventoryrawmaterial.service");
const inventoryrawmaterial_controller_1 = require("./inventoryrawmaterial.controller");
const typeorm_1 = require("@nestjs/typeorm");
const inventoryrawmaterial_entity_1 = require("./entities/inventoryrawmaterial.entity");
const inventorymoves_module_1 = require("../inventorymoves/inventorymoves.module");
const adapters_1 = require("../common/adapters");
const auth_module_1 = require("../auth/auth.module");
let InventoryrawmaterialModule = class InventoryrawmaterialModule {
};
exports.InventoryrawmaterialModule = InventoryrawmaterialModule;
exports.InventoryrawmaterialModule = InventoryrawmaterialModule = __decorate([
    (0, common_1.Module)({
        controllers: [inventoryrawmaterial_controller_1.InventoryrawmaterialController],
        providers: [inventoryrawmaterial_service_1.InventoryrawmaterialService, adapters_1.HandleDBErrors],
        imports: [typeorm_1.TypeOrmModule.forFeature([inventoryrawmaterial_entity_1.Inventoryrawmaterial]), inventorymoves_module_1.InventorymovesModule, auth_module_1.AuthModule],
        exports: [typeorm_1.TypeOrmModule, inventoryrawmaterial_service_1.InventoryrawmaterialService]
    })
], InventoryrawmaterialModule);
//# sourceMappingURL=inventoryrawmaterial.module.js.map