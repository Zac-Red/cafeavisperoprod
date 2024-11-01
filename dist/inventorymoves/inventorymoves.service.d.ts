import { CreateInventorymoveDto } from './dto/create-inventorymove.dto';
import { UpdateInventorymoveDto } from './dto/update-inventorymove.dto';
import { Inventorymove } from './entities/inventorymove.entity';
import { Repository } from 'typeorm';
import { HandleDBErrors } from 'src/common/adapters';
import { QueryParamsInventoryMoveDto } from './dto/query-params-inventorymove.dto';
export declare class InventorymovesService {
    private readonly inventoryMoveRepository;
    private readonly DBErrors;
    constructor(inventoryMoveRepository: Repository<Inventorymove>, DBErrors: HandleDBErrors);
    create(createInventorymoveDto: CreateInventorymoveDto): Promise<Inventorymove[]>;
    findAll(queryparamsinventorymoveDto: QueryParamsInventoryMoveDto): Promise<{
        items: Inventorymove[];
        itemsPerPage: number;
        totalPages: number;
        totalItems: number;
        currentPage: number;
        nextPage: number;
    }>;
    findOne(term: string): Promise<Inventorymove>;
    update(id: number, updateInventorymoveDto: UpdateInventorymoveDto): Promise<Inventorymove>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
