import { Repository, SelectQueryBuilder } from "typeorm";
import { PaginateQueryRaw } from "../interfaces/PaginatedQuery";
export declare function getPaginatedItems<T>(repository: Repository<T>, pagination: {
    limit: number;
    page: number;
}, where: any): Promise<{
    itemsPerPage: number;
    currentPage: number;
    nextPage: number;
    totalItems: number;
    totalPages: number;
    items: T[];
}>;
export declare const getAllPaginated: <T>(qb: SelectQueryBuilder<T>, query: PaginateQueryRaw) => Promise<{
    items: T[];
    itemsPerPage: number;
    totalPages: number;
    totalItems: number;
    currentPage: number;
    nextPage: number;
}>;
