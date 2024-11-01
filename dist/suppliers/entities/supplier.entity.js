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
exports.Supplier = void 0;
const shopping_entity_1 = require("../../shopping/entities/shopping.entity");
const rawmaterial_entity_1 = require("../../rawmaterial/entities/rawmaterial.entity");
const typeorm_1 = require("typeorm");
let Supplier = class Supplier {
};
exports.Supplier = Supplier;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Supplier.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('text', {
        default: 'independiente'
    }),
    __metadata("design:type", String)
], Supplier.prototype, "personeria", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Supplier.prototype, "namecontact", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', {
        default: 0
    }),
    __metadata("design:type", Number)
], Supplier.prototype, "tel", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', {
        unique: true,
        nullable: true
    }),
    __metadata("design:type", Number)
], Supplier.prototype, "dpi", void 0);
__decorate([
    (0, typeorm_1.Column)('text', {
        default: "Sin dirección",
    }),
    __metadata("design:type", String)
], Supplier.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)('boolean', {
        default: false
    }),
    __metadata("design:type", Boolean)
], Supplier.prototype, "deleted", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => rawmaterial_entity_1.Rawmaterial, (rawmaterial) => rawmaterial.supplierId, { cascade: true }),
    __metadata("design:type", rawmaterial_entity_1.Rawmaterial)
], Supplier.prototype, "rawmaterial", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => shopping_entity_1.Shopping, (shopping) => shopping.supplierId, { cascade: true }),
    __metadata("design:type", shopping_entity_1.Shopping)
], Supplier.prototype, "shopping", void 0);
exports.Supplier = Supplier = __decorate([
    (0, typeorm_1.Entity)({ name: 'suppliers' })
], Supplier);
//# sourceMappingURL=supplier.entity.js.map