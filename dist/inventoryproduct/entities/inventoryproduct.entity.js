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
exports.Inventoryproduct = void 0;
const inventorymove_entity_1 = require("../../inventorymoves/entities/inventorymove.entity");
const product_entity_1 = require("../../products/entities/product.entity");
const unitmeasure_entity_1 = require("../../unitmeasure/entities/unitmeasure.entity");
const typeorm_1 = require("typeorm");
let Inventoryproduct = class Inventoryproduct {
};
exports.Inventoryproduct = Inventoryproduct;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Inventoryproduct.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('float', {
        default: 0
    }),
    __metadata("design:type", Number)
], Inventoryproduct.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => product_entity_1.Product, (product) => product.productinventory, { eager: true }),
    __metadata("design:type", product_entity_1.Product)
], Inventoryproduct.prototype, "productId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => unitmeasure_entity_1.Unitmeasure, (unitmeasure) => unitmeasure.inventoryproduct, { eager: true }),
    __metadata("design:type", unitmeasure_entity_1.Unitmeasure)
], Inventoryproduct.prototype, "unitmeasureId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => inventorymove_entity_1.Inventorymove, (inventorymove) => inventorymove.inventoryproduct, { eager: true }),
    __metadata("design:type", inventorymove_entity_1.Inventorymove)
], Inventoryproduct.prototype, "inventorymoveId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Inventoryproduct.prototype, "createdAt", void 0);
exports.Inventoryproduct = Inventoryproduct = __decorate([
    (0, typeorm_1.Entity)({ name: 'inventoryproduct' })
], Inventoryproduct);
//# sourceMappingURL=inventoryproduct.entity.js.map