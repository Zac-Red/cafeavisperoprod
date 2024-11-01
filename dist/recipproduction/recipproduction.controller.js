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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipproductionController = void 0;
const common_1 = require("@nestjs/common");
const recipproduction_service_1 = require("./recipproduction.service");
const create_recipproduction_dto_1 = require("./dto/create-recipproduction.dto");
const query_params_recipproduction_dto_1 = require("./dto/query-params-recipproduction.dto");
const decorators_1 = require("../auth/decorators");
let RecipproductionController = class RecipproductionController {
    constructor(recipproductionService) {
        this.recipproductionService = recipproductionService;
    }
    create(createRecipproductionDto) {
        return this.recipproductionService.create(createRecipproductionDto);
    }
    findAll(queryparams) {
        return this.recipproductionService.findAll(queryparams);
    }
    findOne(term) {
        return this.recipproductionService.findOne(term);
    }
};
exports.RecipproductionController = RecipproductionController;
__decorate([
    (0, common_1.Post)(),
    (0, decorators_1.Auth)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_recipproduction_dto_1.CreateRecipproductionDto]),
    __metadata("design:returntype", void 0)
], RecipproductionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, decorators_1.Auth)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [query_params_recipproduction_dto_1.QueryParamsRecipProductionDto]),
    __metadata("design:returntype", void 0)
], RecipproductionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':term'),
    (0, decorators_1.Auth)(),
    __param(0, (0, common_1.Param)('term')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RecipproductionController.prototype, "findOne", null);
exports.RecipproductionController = RecipproductionController = __decorate([
    (0, common_1.Controller)('recipproduction'),
    __metadata("design:paramtypes", [recipproduction_service_1.RecipproductionService])
], RecipproductionController);
//# sourceMappingURL=recipproduction.controller.js.map