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
exports.Refinerawmaterial = void 0;
const rawmaterial_entity_1 = require("../../rawmaterial/entities/rawmaterial.entity");
const unitmeasure_entity_1 = require("../../unitmeasure/entities/unitmeasure.entity");
const typeorm_1 = require("typeorm");
let Refinerawmaterial = class Refinerawmaterial {
};
exports.Refinerawmaterial = Refinerawmaterial;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Refinerawmaterial.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { default: 0 }),
    __metadata("design:type", Number)
], Refinerawmaterial.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => rawmaterial_entity_1.Rawmaterial, (rawmaterial) => rawmaterial.refinerawmaterial, { eager: true }),
    __metadata("design:type", rawmaterial_entity_1.Rawmaterial)
], Refinerawmaterial.prototype, "rawmaterialId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => unitmeasure_entity_1.Unitmeasure, (unitmeasure) => unitmeasure.refinerawmaterial, { eager: true }),
    __metadata("design:type", unitmeasure_entity_1.Unitmeasure)
], Refinerawmaterial.prototype, "unitmeasureId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Refinerawmaterial.prototype, "createdAt", void 0);
exports.Refinerawmaterial = Refinerawmaterial = __decorate([
    (0, typeorm_1.Entity)({ name: 'refinerawmaterial' })
], Refinerawmaterial);
//# sourceMappingURL=refinerawmaterial.entity.js.map