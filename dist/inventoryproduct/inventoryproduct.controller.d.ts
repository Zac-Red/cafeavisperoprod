import { InventoryproductService } from './inventoryproduct.service';
import { QueryParamsInventoryProductDto } from './dto/query-params-inventoryproducts.dto';
export declare class InventoryproductController {
    private readonly inventoryproductService;
    constructor(inventoryproductService: InventoryproductService);
    findAll(queryparams: QueryParamsInventoryProductDto): Promise<{
        items: import("src/inventoryproduct/entities/inventoryproduct.entity").Inventoryproduct[];
        itemsPerPage: number;
        totalPages: number;
        totalItems: number;
        currentPage: number;
        nextPage: number;
    }>;
}
