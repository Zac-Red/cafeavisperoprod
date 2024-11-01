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
exports.ShoppingDetail = void 0;
const rawmaterial_entity_1 = require("../../rawmaterial/entities/rawmaterial.entity");
const shopping_entity_1 = require("../../shopping/entities/shopping.entity");
const unitmeasure_entity_1 = require("../../unitmeasure/entities/unitmeasure.entity");
const typeorm_1 = require("typeorm");
let ShoppingDetail = class ShoppingDetail {
};
exports.ShoppingDetail = ShoppingDetail;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ShoppingDetail.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'float' }),
    __metadata("design:type", Number)
], ShoppingDetail.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], ShoppingDetail.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'float' }),
    __metadata("design:type", Number)
], ShoppingDetail.prototype, "subtotal", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => unitmeasure_entity_1.Unitmeasure, (unitmeasure) => unitmeasure.shoppingdetail, { eager: true }),
    __metadata("design:type", unitmeasure_entity_1.Unitmeasure)
], ShoppingDetail.prototype, "unitmeasureId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => rawmaterial_entity_1.Rawmaterial, (rawmaterial) => rawmaterial.shoppingdetail, { eager: true }),
    __metadata("design:type", rawmaterial_entity_1.Rawmaterial)
], ShoppingDetail.prototype, "rawmaterialId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => shopping_entity_1.Shopping, (shopping) => shopping.shoppingdetail, { eager: true }),
    __metadata("design:type", shopping_entity_1.Shopping)
], ShoppingDetail.prototype, "shoppingId", void 0);
exports.ShoppingDetail = ShoppingDetail = __decorate([
    (0, typeorm_1.Entity)({ name: 'shoppingdetail' })
], ShoppingDetail);
//# sourceMappingURL=shoppingdetail.entity.js.map