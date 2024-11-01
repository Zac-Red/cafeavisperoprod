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
exports.Unitmeasure = void 0;
const detailproduction_entity_1 = require("../../detailproduction/entities/detailproduction.entity");
const inventoryproduct_entity_1 = require("../../inventoryproduct/entities/inventoryproduct.entity");
const inventoryrawmaterial_entity_1 = require("../../inventoryrawmaterial/entities/inventoryrawmaterial.entity");
const product_entity_1 = require("../../products/entities/product.entity");
const rawmaterial_entity_1 = require("../../rawmaterial/entities/rawmaterial.entity");
const conversionrawmaterial_entity_1 = require("../../refinerawmaterial/entities/conversionrawmaterial.entity");
const refinerawmaterial_entity_1 = require("../../refinerawmaterial/entities/refinerawmaterial.entity");
const salesdetail_entity_1 = require("../../salesdetail/entities/salesdetail.entity");
const shoppingdetail_entity_1 = require("../../shoppingdetail/entities/shoppingdetail.entity");
const typeorm_1 = require("typeorm");
let Unitmeasure = class Unitmeasure {
};
exports.Unitmeasure = Unitmeasure;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], Unitmeasure.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Unitmeasure.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Unitmeasure.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('float', {
        default: 0
    }),
    __metadata("design:type", Number)
], Unitmeasure.prototype, "conversionfactor", void 0);
__decorate([
    (0, typeorm_1.Column)('boolean', {
        default: false
    }),
    __metadata("design:type", Boolean)
], Unitmeasure.prototype, "deleted", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => product_entity_1.Product, (product) => product.unitmeasureId),
    __metadata("design:type", product_entity_1.Product)
], Unitmeasure.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => rawmaterial_entity_1.Rawmaterial, (rawmaterial) => rawmaterial.unitmeasureId),
    __metadata("design:type", rawmaterial_entity_1.Rawmaterial)
], Unitmeasure.prototype, "rawmaterial", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => shoppingdetail_entity_1.ShoppingDetail, (shoppingdetail) => shoppingdetail.unitmeasureId),
    __metadata("design:type", shoppingdetail_entity_1.ShoppingDetail)
], Unitmeasure.prototype, "shoppingdetail", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => salesdetail_entity_1.Salesdetail, (saledetail) => saledetail.unitmeasureId),
    __metadata("design:type", salesdetail_entity_1.Salesdetail)
], Unitmeasure.prototype, "saledetail", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => inventoryrawmaterial_entity_1.Inventoryrawmaterial, (inventoryrawmaterial) => inventoryrawmaterial.unitmeasureId),
    __metadata("design:type", inventoryrawmaterial_entity_1.Inventoryrawmaterial)
], Unitmeasure.prototype, "inventoryrawmaterial", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => inventoryproduct_entity_1.Inventoryproduct, (inventoryproduct) => inventoryproduct.unitmeasureId),
    __metadata("design:type", inventoryproduct_entity_1.Inventoryproduct)
], Unitmeasure.prototype, "inventoryproduct", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => detailproduction_entity_1.Detailproduction, (detailproduction) => detailproduction.unitmeasureId),
    __metadata("design:type", detailproduction_entity_1.Detailproduction)
], Unitmeasure.prototype, "detailproduction", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => conversionrawmaterial_entity_1.Conversionrawmaterial, (conversionrawmaterial) => conversionrawmaterial.unitmeasureId),
    __metadata("design:type", conversionrawmaterial_entity_1.Conversionrawmaterial)
], Unitmeasure.prototype, "conversionrawmaterial", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => refinerawmaterial_entity_1.Refinerawmaterial, (refinerawmaterial) => refinerawmaterial.unitmeasureId),
    __metadata("design:type", refinerawmaterial_entity_1.Refinerawmaterial)
], Unitmeasure.prototype, "refinerawmaterial", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Unitmeasure.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Unitmeasure.prototype, "updatedAt", void 0);
exports.Unitmeasure = Unitmeasure = __decorate([
    (0, typeorm_1.Entity)({ name: 'unitmeasure' })
], Unitmeasure);
//# sourceMappingURL=unitmeasure.entity.js.map