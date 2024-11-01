"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateShoppingDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_shopping_dto_1 = require("./create-shopping.dto");
class UpdateShoppingDto extends (0, mapped_types_1.PartialType)(create_shopping_dto_1.CreateShoppingDto) {
}
exports.UpdateShoppingDto = UpdateShoppingDto;
//# sourceMappingURL=update-shopping.dto.js.map