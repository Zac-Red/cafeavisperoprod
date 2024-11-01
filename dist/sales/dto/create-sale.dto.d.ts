import { FormatSaledetailDto } from "src/salesdetail/dto/format-saledetail.dto";
export declare class CreateSaleDto {
    total: number;
    customerId: string;
    salesdetail: FormatSaledetailDto[];
}
