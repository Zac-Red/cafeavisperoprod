import { CreateInventoryrawmaterialDto } from './dto/create-inventoryrawmaterial.dto';
import { EntityManager, Repository } from 'typeorm';
import { Inventoryrawmaterial } from './entities/inventoryrawmaterial.entity';
import { InventorymovesService } from 'src/inventorymoves/inventorymoves.service';
import { HandleDBErrors } from 'src/common/adapters';
import { QueryParamsInventoryRawMaterialDto } from './dto/query-params-inventoryrawmaterial.dto';
export declare class InventoryrawmaterialService {
    private readonly inventoryrawmaterialRepository;
    private readonly inventorymoveservices;
    private readonly DBErrors;
    constructor(inventoryrawmaterialRepository: Repository<Inventoryrawmaterial>, inventorymoveservices: InventorymovesService, DBErrors: HandleDBErrors);
    inventoryAdjustment(createinventoryrawmaterialDto: CreateInventoryrawmaterialDto, manager?: EntityManager): Promise<any>;
    findAll(queryparamsinventoryrawmaterialDto: QueryParamsInventoryRawMaterialDto): Promise<{
        items: Inventoryrawmaterial[];
        itemsPerPage: number;
        totalPages: number;
        totalItems: number;
        currentPage: number;
        nextPage: number;
    }>;
}
