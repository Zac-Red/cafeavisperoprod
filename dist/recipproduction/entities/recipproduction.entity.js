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
exports.Recipproduction = void 0;
const detailproduction_entity_1 = require("../../detailproduction/entities/detailproduction.entity");
const production_entity_1 = require("../../productions/entities/production.entity");
const product_entity_1 = require("../../products/entities/product.entity");
const typeorm_1 = require("typeorm");
let Recipproduction = class Recipproduction {
};
exports.Recipproduction = Recipproduction;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Recipproduction.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], Recipproduction.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'float' }),
    __metadata("design:type", Number)
], Recipproduction.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => product_entity_1.Product, (product) => product.recipproduction, { eager: true }),
    __metadata("design:type", product_entity_1.Product)
], Recipproduction.prototype, "productId", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => detailproduction_entity_1.Detailproduction, (detailproduction) => detailproduction.recipproductionId),
    __metadata("design:type", detailproduction_entity_1.Detailproduction)
], Recipproduction.prototype, "detailproduction", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => production_entity_1.Production, (production) => production.recipproductionId),
    __metadata("design:type", production_entity_1.Production)
], Recipproduction.prototype, "production", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Recipproduction.prototype, "createdAt", void 0);
exports.Recipproduction = Recipproduction = __decorate([
    (0, typeorm_1.Entity)({ name: 'recipproduction' })
], Recipproduction);
//# sourceMappingURL=recipproduction.entity.js.map