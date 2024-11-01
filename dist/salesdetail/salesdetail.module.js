"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesdetailModule = void 0;
const common_1 = require("@nestjs/common");
const salesdetail_service_1 = require("./salesdetail.service");
const salesdetail_controller_1 = require("./salesdetail.controller");
const typeorm_1 = require("@nestjs/typeorm");
const salesdetail_entity_1 = require("./entities/salesdetail.entity");
const adapters_1 = require("../common/adapters");
const sales_module_1 = require("../sales/sales.module");
const auth_module_1 = require("../auth/auth.module");
let SalesdetailModule = class SalesdetailModule {
};
exports.SalesdetailModule = SalesdetailModule;
exports.SalesdetailModule = SalesdetailModule = __decorate([
    (0, common_1.Module)({
        controllers: [salesdetail_controller_1.SalesdetailController],
        providers: [salesdetail_service_1.SalesdetailService, adapters_1.HandleDBErrors, adapters_1.UuidAdapter],
        imports: [typeorm_1.TypeOrmModule.forFeature([salesdetail_entity_1.Salesdetail]), auth_module_1.AuthModule,
            (0, common_1.forwardRef)(() => sales_module_1.SalesModule)],
        exports: [typeorm_1.TypeOrmModule, salesdetail_service_1.SalesdetailService]
    })
], SalesdetailModule);
//# sourceMappingURL=salesdetail.module.js.map