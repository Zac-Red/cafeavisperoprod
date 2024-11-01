import { PaginationDto } from "src/common/dtos/pagination.dto";
export declare class QueryParamsSaleDto extends PaginationDto {
    clientname?: string;
    total?: number;
}
export declare class QueryParamsReportTopClientesSaleDto {
    startOfCurrentMonth: string;
    endOfCurrentMonth: string;
}
