import { InventorymovesService } from './inventorymoves.service';
import { CreateInventorymoveDto } from './dto/create-inventorymove.dto';
import { UpdateInventorymoveDto } from './dto/update-inventorymove.dto';
import { QueryParamsInventoryMoveDto } from './dto/query-params-inventorymove.dto';
export declare class InventorymovesController {
    private readonly inventorymovesService;
    constructor(inventorymovesService: InventorymovesService);
    create(createInventorymoveDto: CreateInventorymoveDto): Promise<import("src/inventorymoves/entities/inventorymove.entity").Inventorymove[]>;
    findAll(queryparams: QueryParamsInventoryMoveDto): Promise<{
        items: import("src/inventorymoves/entities/inventorymove.entity").Inventorymove[];
        itemsPerPage: number;
        totalPages: number;
        totalItems: number;
        currentPage: number;
        nextPage: number;
    }>;
    findOne(term: string): Promise<import("src/inventorymoves/entities/inventorymove.entity").Inventorymove>;
    update(id: string, updateInventorymoveDto: UpdateInventorymoveDto): Promise<import("src/inventorymoves/entities/inventorymove.entity").Inventorymove>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
