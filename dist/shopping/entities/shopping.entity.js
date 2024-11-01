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
exports.Shopping = void 0;
const shoppingdetail_entity_1 = require("../../shoppingdetail/entities/shoppingdetail.entity");
const supplier_entity_1 = require("../../suppliers/entities/supplier.entity");
const typeorm_1 = require("typeorm");
let Shopping = class Shopping {
};
exports.Shopping = Shopping;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Shopping.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Shopping.prototype, "commercialdocument", void 0);
__decorate([
    (0, typeorm_1.Column)('float'),
    __metadata("design:type", Number)
], Shopping.prototype, "total", void 0);
__decorate([
    (0, typeorm_1.Column)('date'),
    __metadata("design:type", Date)
], Shopping.prototype, "datecommercialdocument", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Shopping.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => supplier_entity_1.Supplier, (supplier) => supplier.shopping, { eager: true }),
    __metadata("design:type", supplier_entity_1.Supplier)
], Shopping.prototype, "supplierId", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => shoppingdetail_entity_1.ShoppingDetail, (shoppingdetail) => shoppingdetail.shoppingId, { cascade: true }),
    __metadata("design:type", shoppingdetail_entity_1.ShoppingDetail)
], Shopping.prototype, "shoppingdetail", void 0);
exports.Shopping = Shopping = __decorate([
    (0, typeorm_1.Entity)({ name: 'shoppings' })
], Shopping);
//# sourceMappingURL=shopping.entity.js.map