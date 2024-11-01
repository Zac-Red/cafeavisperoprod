"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUnitmeasureDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_unitmeasure_dto_1 = require("./create-unitmeasure.dto");
class UpdateUnitmeasureDto extends (0, mapped_types_1.PartialType)(create_unitmeasure_dto_1.CreateUnitmeasureDto) {
}
exports.UpdateUnitmeasureDto = UpdateUnitmeasureDto;
//# sourceMappingURL=update-unitmeasure.dto.js.map