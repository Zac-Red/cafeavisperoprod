"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inventorymove = void 0;
const inventoryproduct_entity_1 = require("../../inventoryproduct/entities/inventoryproduct.entity");
const inventoryrawmaterial_entity_1 = require("../../inventoryrawmaterial/entities/inventoryrawmaterial.entity");
const typeorm_1 = require("typeorm");
let Inventorymove = class Inventorymove {
};
exports.Inventorymove = Inventorymove;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], Inventorymove.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Inventorymove.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Inventorymove.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('boolean', {
        default: false
    }),
    __metadata("design:type", Boolean)
], Inventorymove.prototype, "deleted", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => inventoryrawmaterial_entity_1.Inventoryrawmaterial, (inventoryrawmaterial) => inventoryrawmaterial.inventorymoveId),
    __metadata("design:type", inventoryrawmaterial_entity_1.Inventoryrawmaterial)
], Inventorymove.prototype, "inventoryrawmaterial", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => inventoryproduct_entity_1.Inventoryproduct, (inventoryproduct) => inventoryproduct.inventorymoveId),
    __metadata("design:type", inventoryproduct_entity_1.Inventoryproduct)
], Inventorymove.prototype, "inventoryproduct", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Inventorymove.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Inventorymove.prototype, "updatedAt", void 0);
exports.Inventorymove = Inventorymove = __decorate([
    (0, typeorm_1.Entity)({ name: 'inventorymoves' })
], Inventorymove);
//# sourceMappingURL=inventorymove.entity.js.map