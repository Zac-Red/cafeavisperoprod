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
exports.QueryParamsReportTopRawmaterialShoppDto = exports.QueryParamsRawMaterials = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const pagination_dto_1 = require("../../common/dtos/pagination.dto");
class QueryParamsRawMaterials extends pagination_dto_1.PaginationDto {
}
exports.QueryParamsRawMaterials = QueryParamsRawMaterials;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QueryParamsRawMaterials.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], QueryParamsRawMaterials.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], QueryParamsRawMaterials.prototype, "stock", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QueryParamsRawMaterials.prototype, "unitmeasure", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QueryParamsRawMaterials.prototype, "supplier", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], QueryParamsRawMaterials.prototype, "supplierId", void 0);
class QueryParamsReportTopRawmaterialShoppDto {
}
exports.QueryParamsReportTopRawmaterialShoppDto = QueryParamsReportTopRawmaterialShoppDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^\d{4}-\d{2}-\d{2}$/, { message: 'La fecha (startOfCurrentMonth) de inicio debe estar en formato YYYY-MM-DD' }),
    __metadata("design:type", String)
], QueryParamsReportTopRawmaterialShoppDto.prototype, "startOfCurrentMonth", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^\d{4}-\d{2}-\d{2}$/, { message: 'La fecha (endOfCurrentMonth) fin debe estar en formato YYYY-MM-DD' }),
    __metadata("design:type", String)
], QueryParamsReportTopRawmaterialShoppDto.prototype, "endOfCurrentMonth", void 0);
//# sourceMappingURL=query-params.dto.js.map