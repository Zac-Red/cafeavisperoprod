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
exports.Product = void 0;
const inventoryproduct_entity_1 = require("../../inventoryproduct/entities/inventoryproduct.entity");
const recipproduction_entity_1 = require("../../recipproduction/entities/recipproduction.entity");
const salesdetail_entity_1 = require("../../salesdetail/entities/salesdetail.entity");
const unitmeasure_entity_1 = require("../../unitmeasure/entities/unitmeasure.entity");
const typeorm_1 = require("typeorm");
let Product = class Product {
};
exports.Product = Product;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Product.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Product.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('text', {
        nullable: true
    }),
    __metadata("design:type", String)
], Product.prototype, "url", void 0);
__decorate([
    (0, typeorm_1.Column)('float', {
        default: 0
    }),
    __metadata("design:type", Number)
], Product.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)('int', {
        default: 0
    }),
    __metadata("design:type", Number)
], Product.prototype, "stock", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => unitmeasure_entity_1.Unitmeasure, (unitmeasure) => unitmeasure.product, { eager: true }),
    __metadata("design:type", unitmeasure_entity_1.Unitmeasure)
], Product.prototype, "unitmeasureId", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => inventoryproduct_entity_1.Inventoryproduct, (inventoryproduct) => inventoryproduct.productId),
    __metadata("design:type", inventoryproduct_entity_1.Inventoryproduct)
], Product.prototype, "productinventory", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => salesdetail_entity_1.Salesdetail, (salesdetail) => salesdetail.productId),
    __metadata("design:type", salesdetail_entity_1.Salesdetail)
], Product.prototype, "saledetail", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => recipproduction_entity_1.Recipproduction, (recipproduction) => recipproduction.productId),
    __metadata("design:type", recipproduction_entity_1.Recipproduction)
], Product.prototype, "recipproduction", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Product.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Product.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('bool', {
        default: false
    }),
    __metadata("design:type", Boolean)
], Product.prototype, "deleted", void 0);
exports.Product = Product = __decorate([
    (0, typeorm_1.Entity)({ name: 'products' })
], Product);
//# sourceMappingURL=product.entity.js.map