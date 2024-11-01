import { ProductionsService } from './productions.service';
import { CreateProductionDto } from './dto/create-production.dto';
import { QueryParamsProductionsDto, QueryParamsReportTopProductsProductionsDto } from './dto/query-params-productions.dto';
export declare class ProductionsController {
    private readonly productionsService;
    constructor(productionsService: ProductionsService);
    create(createProductionDto: CreateProductionDto): Promise<{
        productionComplet: any;
    }>;
    findAll(queryparams: QueryParamsProductionsDto): Promise<{
        items: import("src/productions/entities/production.entity").Production[];
        itemsPerPage: number;
        totalPages: number;
        totalItems: number;
        currentPage: number;
        nextPage: number;
    }>;
    revertProduction(productionId: string): Promise<void>;
    findProductTopProductions(queryparams: QueryParamsReportTopProductsProductionsDto): Promise<any[]>;
}
