"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDepartamentDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_departament_dto_1 = require("./create-departament.dto");
class UpdateDepartamentDto extends (0, mapped_types_1.PartialType)(create_departament_dto_1.CreateDepartamentDto) {
}
exports.UpdateDepartamentDto = UpdateDepartamentDto;
//# sourceMappingURL=update-departament.dto.js.map