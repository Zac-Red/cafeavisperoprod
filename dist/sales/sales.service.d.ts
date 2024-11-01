import { CreateSaleDto } from './dto/create-sale.dto';
import { Sale } from './entities/sale.entity';
import { DataSource, Repository } from 'typeorm';
import { HandleDBErrors, UuidAdapter } from 'src/common/adapters';
import { SalesdetailService } from 'src/salesdetail/salesdetail.service';
import { CustomersService } from 'src/customers/customers.service';
import { ProductsService } from 'src/products/products.service';
import { InventoryproductService } from 'src/inventoryproduct/inventoryproduct.service';
import { QueryParamsReportTopClientesSaleDto, QueryParamsSaleDto } from './dto/query-params-sales.dto';
export declare class SalesService {
    private readonly saleRepository;
    private readonly salesdetailservice;
    private readonly customersservice;
    private readonly productsservice;
    private readonly inventoryproductservice;
    private readonly dataSource;
    private readonly DBErrors;
    private readonly uuidAdapter;
    constructor(saleRepository: Repository<Sale>, salesdetailservice: SalesdetailService, customersservice: CustomersService, productsservice: ProductsService, inventoryproductservice: InventoryproductService, dataSource: DataSource, DBErrors: HandleDBErrors, uuidAdapter: UuidAdapter);
    create(createSaleDto: CreateSaleDto): Promise<{
        saleComplet: any;
    }>;
    findAll(queryparamssaleDto: QueryParamsSaleDto): Promise<{
        items: Sale[];
        itemsPerPage: number;
        totalPages: number;
        totalItems: number;
        currentPage: number;
        nextPage: number;
    }>;
    findOne(id: string): Promise<Sale>;
    findCustomersTop(queryparamsreporttopclientessaleDto: QueryParamsReportTopClientesSaleDto): Promise<any[]>;
    revertSale(saleId: string): Promise<void>;
}
