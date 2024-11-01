import { PaginationDto } from "src/common/dtos/pagination.dto";
export declare class QueryParamsProductDto extends PaginationDto {
    name?: string;
    unitmeasure?: string;
    price?: number;
    stock?: number;
}
export declare class QueryParamsReportTopProductsSaleDto {
    startOfCurrentMonth: string;
    endOfCurrentMonth: string;
}
