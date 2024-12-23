"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartamentsModule = void 0;
const common_1 = require("@nestjs/common");
const departaments_service_1 = require("./departaments.service");
const departaments_controller_1 = require("./departaments.controller");
const typeorm_1 = require("@nestjs/typeorm");
const departament_entity_1 = require("./entities/departament.entity");
let DepartamentsModule = class DepartamentsModule {
};
exports.DepartamentsModule = DepartamentsModule;
exports.DepartamentsModule = DepartamentsModule = __decorate([
    (0, common_1.Module)({
        controllers: [departaments_controller_1.DepartamentsController],
        providers: [departaments_service_1.DepartamentsService],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([departament_entity_1.Departament])
        ],
    })
], DepartamentsModule);
//# sourceMappingURL=departaments.module.js.map