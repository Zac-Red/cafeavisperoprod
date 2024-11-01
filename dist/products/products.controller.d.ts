import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { QueryParamsProductDto, QueryParamsReportTopProductsSaleDto } from './dto/query-params-products.dto';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(createProductDto: CreateProductDto): Promise<import("src/products/entities/product.entity").Product[]>;
    findAll(queryparams: QueryParamsProductDto): Promise<{
        items: import("src/products/entities/product.entity").Product[];
        itemsPerPage: number;
        totalPages: number;
        totalItems: number;
        currentPage: number;
        nextPage: number;
    }>;
    reportTopProducts(queryparams: QueryParamsReportTopProductsSaleDto): Promise<any[]>;
    findOne(term: string): Promise<import("src/products/entities/product.entity").Product>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<{
        id: string;
        name: string;
        description: string;
        url: string;
        price: number;
        stock: number;
        unitmeasureId: import("src/unitmeasure/entities/unitmeasure.entity").Unitmeasure;
        productinventory: import("src/inventoryproduct/entities/inventoryproduct.entity").Inventoryproduct;
        saledetail: import("src/salesdetail/entities/salesdetail.entity").Salesdetail;
        recipproduction: import("src/recipproduction/entities/recipproduction.entity").Recipproduction;
        createdAt: Date;
        updatedAt: Date;
        deleted: boolean;
    } & import("src/products/entities/product.entity").Product>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
