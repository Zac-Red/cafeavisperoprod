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
exports.Rawmaterial = void 0;
const detailproduction_entity_1 = require("../../detailproduction/entities/detailproduction.entity");
const inventoryrawmaterial_entity_1 = require("../../inventoryrawmaterial/entities/inventoryrawmaterial.entity");
const conversionrawmaterial_entity_1 = require("../../refinerawmaterial/entities/conversionrawmaterial.entity");
const refinerawmaterial_entity_1 = require("../../refinerawmaterial/entities/refinerawmaterial.entity");
const shoppingdetail_entity_1 = require("../../shoppingdetail/entities/shoppingdetail.entity");
const supplier_entity_1 = require("../../suppliers/entities/supplier.entity");
const unitmeasure_entity_1 = require("../../unitmeasure/entities/unitmeasure.entity");
const typeorm_1 = require("typeorm");
let Rawmaterial = class Rawmaterial {
};
exports.Rawmaterial = Rawmaterial;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Rawmaterial.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Rawmaterial.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Rawmaterial.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('text', {
        nullable: true
    }),
    __metadata("design:type", String)
], Rawmaterial.prototype, "url", void 0);
__decorate([
    (0, typeorm_1.Column)('float', {
        default: 0
    }),
    __metadata("design:type", Number)
], Rawmaterial.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)('float', {
        default: 0
    }),
    __metadata("design:type", Number)
], Rawmaterial.prototype, "stock", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Rawmaterial.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Rawmaterial.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('boolean', {
        default: false
    }),
    __metadata("design:type", Boolean)
], Rawmaterial.prototype, "deleted", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => supplier_entity_1.Supplier, (supplier) => supplier.rawmaterial, { eager: true }),
    __metadata("design:type", supplier_entity_1.Supplier)
], Rawmaterial.prototype, "supplierId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => unitmeasure_entity_1.Unitmeasure, (unitmeasure) => unitmeasure.rawmaterial, { eager: true }),
    __metadata("design:type", unitmeasure_entity_1.Unitmeasure)
], Rawmaterial.prototype, "unitmeasureId", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => inventoryrawmaterial_entity_1.Inventoryrawmaterial, (inventoryrawmaterial) => inventoryrawmaterial.rawmaterialId),
    __metadata("design:type", inventoryrawmaterial_entity_1.Inventoryrawmaterial)
], Rawmaterial.prototype, "rawmaterialinventory", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => shoppingdetail_entity_1.ShoppingDetail, (shoppingdetail) => shoppingdetail.rawmaterialId),
    __metadata("design:type", shoppingdetail_entity_1.ShoppingDetail)
], Rawmaterial.prototype, "shoppingdetail", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => detailproduction_entity_1.Detailproduction, (detailproduction) => detailproduction.rawmaterialId),
    __metadata("design:type", detailproduction_entity_1.Detailproduction)
], Rawmaterial.prototype, "detailproduction", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => refinerawmaterial_entity_1.Refinerawmaterial, (refinerawmaterial) => refinerawmaterial.rawmaterialId),
    __metadata("design:type", refinerawmaterial_entity_1.Refinerawmaterial)
], Rawmaterial.prototype, "refinerawmaterial", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => conversionrawmaterial_entity_1.Conversionrawmaterial, (conversionrawmaterial) => conversionrawmaterial.rawmaterialId),
    __metadata("design:type", conversionrawmaterial_entity_1.Conversionrawmaterial)
], Rawmaterial.prototype, "conversionrawmaterial", void 0);
exports.Rawmaterial = Rawmaterial = __decorate([
    (0, typeorm_1.Entity)({ name: 'rawmaterials' })
], Rawmaterial);
//# sourceMappingURL=rawmaterial.entity.js.map