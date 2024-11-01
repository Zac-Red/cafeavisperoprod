"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPaginated = exports.getPaginatedItems = void 0;
async function getPaginatedItems(repository, pagination, where) {
    const { limit, page } = pagination;
    const items = await repository.find({
        where,
        take: limit,
        skip: limit * (page - 1),
    });
    const itemsPerPage = limit;
    const currentPage = page;
    const totalItems = await repository.count();
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const nextPage = totalPages - currentPage <= 0 ? null : currentPage + 1;
    return {
        itemsPerPage,
        currentPage,
        nextPage,
        totalItems,
        totalPages,
        items,
    };
}
exports.getPaginatedItems = getPaginatedItems;
const getAllPaginated = async (qb, query) => {
    const { page, take } = query;
    const skip = take * page - take;
    const [rows, count] = await qb
        .take(take)
        .skip(skip)
        .getManyAndCount();
    const itemsPerPage = take;
    const totalPages = Math.ceil(count / itemsPerPage);
    const totalItems = count;
    const currentPage = page;
    const nextPage = totalPages - currentPage <= 0 ? null : currentPage + 1;
    return { items: rows,
        itemsPerPage,
        totalPages,
        totalItems,
        currentPage,
        nextPage,
    };
};
exports.getAllPaginated = getAllPaginated;
//# sourceMappingURL=find.helpers.js.map