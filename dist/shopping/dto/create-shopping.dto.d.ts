import { FormatShoppingdetailDto } from "src/shoppingdetail/dto/format-shoppingdetail.dto";
export declare class CreateShoppingDto {
    total: number;
    commercialdocument: string;
    datecommercialdocument: string;
    supplierId: string;
    shoppingdetail: FormatShoppingdetailDto[];
}
