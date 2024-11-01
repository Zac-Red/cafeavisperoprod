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
exports.Sale = void 0;
const customer_entity_1 = require("../../customers/entities/customer.entity");
const salesdetail_entity_1 = require("../../salesdetail/entities/salesdetail.entity");
const typeorm_1 = require("typeorm");
let Sale = class Sale {
};
exports.Sale = Sale;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Sale.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('float'),
    __metadata("design:type", Number)
], Sale.prototype, "total", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Sale.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => customer_entity_1.Customer, (customer) => customer.sale, { eager: true }),
    __metadata("design:type", customer_entity_1.Customer)
], Sale.prototype, "customerId", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => salesdetail_entity_1.Salesdetail, (salesdetail) => salesdetail.saleId, { cascade: true }),
    __metadata("design:type", salesdetail_entity_1.Salesdetail)
], Sale.prototype, "salesdetail", void 0);
exports.Sale = Sale = __decorate([
    (0, typeorm_1.Entity)({ name: 'sales' })
], Sale);
//# sourceMappingURL=sale.entity.js.map