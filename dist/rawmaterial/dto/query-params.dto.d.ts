import { PaginationDto } from "src/common/dtos/pagination.dto";
export declare class QueryParamsRawMaterials extends PaginationDto {
    name?: string;
    price?: number;
    stock?: number;
    unitmeasure?: string;
    supplier?: string;
    supplierId?: string;
}
export declare class QueryParamsReportTopRawmaterialShoppDto {
    startOfCurrentMonth: string;
    endOfCurrentMonth: string;
}
