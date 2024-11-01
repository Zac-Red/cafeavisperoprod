import { PaginationDto } from "src/common/dtos/pagination.dto";
export declare class QueryParamsUserDto extends PaginationDto {
    firstname?: string;
    lastname?: string;
    email?: string;
    IsActive?: boolean;
    roles?: string;
}
