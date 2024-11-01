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
exports.QueryParamsReportTopProductsProductionsDto = exports.QueryParamsProductionsDto = void 0;
const class_validator_1 = require("class-validator");
const pagination_dto_1 = require("../../common/dtos/pagination.dto");
class QueryParamsProductionsDto extends pagination_dto_1.PaginationDto {
}
exports.QueryParamsProductionsDto = QueryParamsProductionsDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QueryParamsProductionsDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QueryParamsProductionsDto.prototype, "product", void 0);
class QueryParamsReportTopProductsProductionsDto {
}
exports.QueryParamsReportTopProductsProductionsDto = QueryParamsReportTopProductsProductionsDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^\d{4}-\d{2}-\d{2}$/, { message: 'La fecha (startOfCurrentMonth) de inicio debe estar en formato YYYY-MM-DD' }),
    __metadata("design:type", String)
], QueryParamsReportTopProductsProductionsDto.prototype, "startOfCurrentMonth", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^\d{4}-\d{2}-\d{2}$/, { message: 'La fecha (endOfCurrentMonth) fin debe estar en formato YYYY-MM-DD' }),
    __metadata("design:type", String)
], QueryParamsReportTopProductsProductionsDto.prototype, "endOfCurrentMonth", void 0);
//# sourceMappingURL=query-params-productions.dto.js.map