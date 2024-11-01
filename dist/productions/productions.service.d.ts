import { CreateProductionDto } from './dto/create-production.dto';
import { Production } from './entities/production.entity';
import { DataSource, Repository } from 'typeorm';
import { HandleDBErrors, UuidAdapter } from 'src/common/adapters';
import { ProductsService } from 'src/products/products.service';
import { RawmaterialService } from 'src/rawmaterial/rawmaterial.service';
import { DetailproductionService } from 'src/detailproduction/detailproduction.service';
import { InventoryproductService } from 'src/inventoryproduct/inventoryproduct.service';
import { InventoryrawmaterialService } from 'src/inventoryrawmaterial/inventoryrawmaterial.service';
import { QueryParamsProductionsDto, QueryParamsReportTopProductsProductionsDto } from './dto/query-params-productions.dto';
export declare class ProductionsService {
    private readonly productionRepository;
    private readonly productsservices;
    private readonly rawmaterialservice;
    private readonly detailproductionservice;
    private readonly inventoryproductservice;
    private readonly inventoryrawmaterialservice;
    private readonly dataSource;
    private readonly DBErrors;
    private readonly uuidAdapter;
    constructor(productionRepository: Repository<Production>, productsservices: ProductsService, rawmaterialservice: RawmaterialService, detailproductionservice: DetailproductionService, inventoryproductservice: InventoryproductService, inventoryrawmaterialservice: InventoryrawmaterialService, dataSource: DataSource, DBErrors: HandleDBErrors, uuidAdapter: UuidAdapter);
    create(createProductionDto: CreateProductionDto): Promise<{
        productionComplet: any;
    }>;
    findAll(queryparamsproductionsDto: QueryParamsProductionsDto): Promise<{
        items: Production[];
        itemsPerPage: number;
        totalPages: number;
        totalItems: number;
        currentPage: number;
        nextPage: number;
    }>;
    revertProduction(productionId: string): Promise<void>;
    findTopProductProduction(queryparamsreporttopproductsproductionsDto: QueryParamsReportTopProductsProductionsDto): Promise<any[]>;
}
