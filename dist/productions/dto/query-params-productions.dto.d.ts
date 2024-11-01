import { PaginationDto } from "src/common/dtos/pagination.dto";
export declare class QueryParamsProductionsDto extends PaginationDto {
    name?: string;
    product?: string;
}
export declare class QueryParamsReportTopProductsProductionsDto {
    startOfCurrentMonth: string;
    endOfCurrentMonth: string;
}
