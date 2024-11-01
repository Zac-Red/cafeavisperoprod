import { CreateInventoryproductDto } from './dto/create-inventoryproduct.dto';
import { EntityManager, Repository } from 'typeorm';
import { Inventoryproduct } from './entities/inventoryproduct.entity';
import { InventorymovesService } from 'src/inventorymoves/inventorymoves.service';
import { HandleDBErrors } from 'src/common/adapters';
import { QueryParamsInventoryProductDto } from './dto/query-params-inventoryproducts.dto';
export declare class InventoryproductService {
    private readonly inventoryproductRepository;
    private readonly inventorymoveservices;
    private readonly DBErrors;
    constructor(inventoryproductRepository: Repository<Inventoryproduct>, inventorymoveservices: InventorymovesService, DBErrors: HandleDBErrors);
    inventoryAdjustment(createInventoryproductDto: CreateInventoryproductDto, manager?: EntityManager): Promise<any>;
    findAll(queryparamsinventoryproductDto: QueryParamsInventoryProductDto): Promise<{
        items: Inventoryproduct[];
        itemsPerPage: number;
        totalPages: number;
        totalItems: number;
        currentPage: number;
        nextPage: number;
    }>;
}
