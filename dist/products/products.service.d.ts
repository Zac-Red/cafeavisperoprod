import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { HandleDBErrors, UuidAdapter } from 'src/common/adapters';
import { Product } from './entities/product.entity';
import { DataSource, EntityManager, Repository } from 'typeorm';
import { QueryParamsProductDto, QueryParamsReportTopProductsSaleDto } from './dto/query-params-products.dto';
import { UnitmeasureService } from 'src/unitmeasure/unitmeasure.service';
import { Salesdetail } from 'src/salesdetail/entities/salesdetail.entity';
export declare class ProductsService {
    private readonly productRepository;
    private readonly unitmeasureservices;
    private readonly dataSource;
    private readonly uuidAdapter;
    private readonly DBErrors;
    constructor(productRepository: Repository<Product>, unitmeasureservices: UnitmeasureService, dataSource: DataSource, uuidAdapter: UuidAdapter, DBErrors: HandleDBErrors);
    create(createProductDto: CreateProductDto): Promise<Product[]>;
    findAll(queryparamsproductDto: QueryParamsProductDto): Promise<{
        items: Product[];
        itemsPerPage: number;
        totalPages: number;
        totalItems: number;
        currentPage: number;
        nextPage: number;
    }>;
    findTopProductsSales(queryparamsreporttopproductssaleDto: QueryParamsReportTopProductsSaleDto): Promise<any[]>;
    findOne(term: string): Promise<Product>;
    update(id: string, updateProductDto: UpdateProductDto, manager?: EntityManager): Promise<{
        id: string;
        name: string;
        description: string;
        url: string;
        price: number;
        stock: number;
        unitmeasureId: import("src/unitmeasure/entities/unitmeasure.entity").Unitmeasure;
        productinventory: import("src/inventoryproduct/entities/inventoryproduct.entity").Inventoryproduct;
        saledetail: Salesdetail;
        recipproduction: import("src/recipproduction/entities/recipproduction.entity").Recipproduction;
        createdAt: Date;
        updatedAt: Date;
        deleted: boolean;
    } & Product>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
