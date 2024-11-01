"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSalesdetailDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_salesdetail_dto_1 = require("./create-salesdetail.dto");
class UpdateSalesdetailDto extends (0, mapped_types_1.PartialType)(create_salesdetail_dto_1.CreateSalesdetailDto) {
}
exports.UpdateSalesdetailDto = UpdateSalesdetailDto;
//# sourceMappingURL=update-salesdetail.dto.js.map