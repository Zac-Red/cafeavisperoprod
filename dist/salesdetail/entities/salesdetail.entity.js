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
exports.Salesdetail = void 0;
const product_entity_1 = require("../../products/entities/product.entity");
const sale_entity_1 = require("../../sales/entities/sale.entity");
const unitmeasure_entity_1 = require("../../unitmeasure/entities/unitmeasure.entity");
const typeorm_1 = require("typeorm");
let Salesdetail = class Salesdetail {
};
exports.Salesdetail = Salesdetail;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Salesdetail.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'float' }),
    __metadata("design:type", Number)
], Salesdetail.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], Salesdetail.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'float' }),
    __metadata("design:type", Number)
], Salesdetail.prototype, "subtotal", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => unitmeasure_entity_1.Unitmeasure, (unitmeasure) => unitmeasure.saledetail, { eager: true }),
    __metadata("design:type", unitmeasure_entity_1.Unitmeasure)
], Salesdetail.prototype, "unitmeasureId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => product_entity_1.Product, (product) => product.saledetail, { eager: true }),
    __metadata("design:type", product_entity_1.Product)
], Salesdetail.prototype, "productId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => sale_entity_1.Sale, (sale) => sale.salesdetail, { eager: true }),
    __metadata("design:type", sale_entity_1.Sale)
], Salesdetail.prototype, "saleId", void 0);
exports.Salesdetail = Salesdetail = __decorate([
    (0, typeorm_1.Entity)({ name: 'salesdetail' })
], Salesdetail);
//# sourceMappingURL=salesdetail.entity.js.map