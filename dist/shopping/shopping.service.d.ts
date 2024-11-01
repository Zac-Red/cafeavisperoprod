import { CreateShoppingDto } from './dto/create-shopping.dto';
import { Shopping } from './entities/shopping.entity';
import { DataSource, Repository } from 'typeorm';
import { HandleDBErrors, UuidAdapter } from 'src/common/adapters';
import { SuppliersService } from 'src/suppliers/suppliers.service';
import { RawmaterialService } from 'src/rawmaterial/rawmaterial.service';
import { ShoppingdetailService } from 'src/shoppingdetail/shoppingdetail.service';
import { InventoryrawmaterialService } from 'src/inventoryrawmaterial/inventoryrawmaterial.service';
import { QueryParamsShoppingDto } from './dto/query-params-shopping.dto';
export declare class ShoppingService {
    private readonly shoppingRepository;
    private readonly shoppingdetailservice;
    private readonly supplierservices;
    private readonly rawmaterialservices;
    private readonly inventoryrawmaterialservice;
    private readonly dataSource;
    private readonly DBErrors;
    private readonly uuidAdapter;
    constructor(shoppingRepository: Repository<Shopping>, shoppingdetailservice: ShoppingdetailService, supplierservices: SuppliersService, rawmaterialservices: RawmaterialService, inventoryrawmaterialservice: InventoryrawmaterialService, dataSource: DataSource, DBErrors: HandleDBErrors, uuidAdapter: UuidAdapter);
    create(createShoppingDto: CreateShoppingDto): Promise<{
        shoppingComplet: any;
    }>;
    findAll(queryparamsshoppingDto: QueryParamsShoppingDto): Promise<{
        items: Shopping[];
        itemsPerPage: number;
        totalPages: number;
        totalItems: number;
        currentPage: number;
        nextPage: number;
    }>;
    findOne(term: string): Promise<Shopping>;
    revertShopping(shoppingId: string): Promise<void>;
}
