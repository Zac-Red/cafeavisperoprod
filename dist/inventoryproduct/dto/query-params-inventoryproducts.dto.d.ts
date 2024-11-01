import { PaginationDto } from "src/common/dtos/pagination.dto";
export declare class QueryParamsInventoryProductDto extends PaginationDto {
    product?: string;
    unitmeasure?: string;
    tipomovimiento?: string;
    amount?: number;
}
