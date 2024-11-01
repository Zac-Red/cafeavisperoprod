"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRawmaterialDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_rawmaterial_dto_1 = require("./create-rawmaterial.dto");
class UpdateRawmaterialDto extends (0, mapped_types_1.PartialType)(create_rawmaterial_dto_1.CreateRawmaterialDto) {
}
exports.UpdateRawmaterialDto = UpdateRawmaterialDto;
//# sourceMappingURL=update-rawmaterial.dto.js.map