"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryproductModule = void 0;
const common_1 = require("@nestjs/common");
const inventoryproduct_service_1 = require("./inventoryproduct.service");
const inventoryproduct_controller_1 = require("./inventoryproduct.controller");
const typeorm_1 = require("@nestjs/typeorm");
const inventoryproduct_entity_1 = require("./entities/inventoryproduct.entity");
const inventorymoves_module_1 = require("../inventorymoves/inventorymoves.module");
const adapters_1 = require("../common/adapters");
const auth_module_1 = require("../auth/auth.module");
let InventoryproductModule = class InventoryproductModule {
};
exports.InventoryproductModule = InventoryproductModule;
exports.InventoryproductModule = InventoryproductModule = __decorate([
    (0, common_1.Module)({
        controllers: [inventoryproduct_controller_1.InventoryproductController],
        providers: [inventoryproduct_service_1.InventoryproductService, adapters_1.HandleDBErrors, adapters_1.UuidAdapter],
        imports: [typeorm_1.TypeOrmModule.forFeature([inventoryproduct_entity_1.Inventoryproduct]), inventorymoves_module_1.InventorymovesModule,
            auth_module_1.AuthModule],
        exports: [typeorm_1.TypeOrmModule, inventoryproduct_service_1.InventoryproductService]
    })
], InventoryproductModule);
//# sourceMappingURL=inventoryproduct.module.js.map