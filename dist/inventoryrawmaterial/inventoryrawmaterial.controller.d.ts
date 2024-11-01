import { InventoryrawmaterialService } from './inventoryrawmaterial.service';
import { QueryParamsInventoryRawMaterialDto } from './dto/query-params-inventoryrawmaterial.dto';
export declare class InventoryrawmaterialController {
    private readonly inventoryrawmaterialService;
    constructor(inventoryrawmaterialService: InventoryrawmaterialService);
    findAll(Queryparams: QueryParamsInventoryRawMaterialDto): Promise<{
        items: import("src/inventoryrawmaterial/entities/inventoryrawmaterial.entity").Inventoryrawmaterial[];
        itemsPerPage: number;
        totalPages: number;
        totalItems: number;
        currentPage: number;
        nextPage: number;
    }>;
}
