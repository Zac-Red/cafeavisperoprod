import { CreateRecipproductionDto } from './dto/create-recipproduction.dto';
import { Recipproduction } from './entities/recipproduction.entity';
import { DataSource, Repository } from 'typeorm';
import { HandleDBErrors, UuidAdapter } from 'src/common/adapters';
import { ProductsService } from 'src/products/products.service';
import { RawmaterialService } from 'src/rawmaterial/rawmaterial.service';
import { UnitmeasureService } from 'src/unitmeasure/unitmeasure.service';
import { DetailproductionService } from 'src/detailproduction/detailproduction.service';
import { QueryParamsRecipProductionDto } from './dto/query-params-recipproduction.dto';
export declare class RecipproductionService {
    private readonly recipproductionRepository;
    private readonly productsservice;
    private readonly rawmaterialservice;
    private readonly unitmeasureservice;
    private readonly detailproductionservice;
    private readonly dataSource;
    private readonly DBErrors;
    private readonly uuidAdapter;
    constructor(recipproductionRepository: Repository<Recipproduction>, productsservice: ProductsService, rawmaterialservice: RawmaterialService, unitmeasureservice: UnitmeasureService, detailproductionservice: DetailproductionService, dataSource: DataSource, DBErrors: HandleDBErrors, uuidAdapter: UuidAdapter);
    create(createRecipproductionDto: CreateRecipproductionDto): Promise<{
        recipproductioncomplet: any;
    }>;
    findAll(queryparamsrecipproductionDto: QueryParamsRecipProductionDto): Promise<{
        items: Recipproduction[];
        itemsPerPage: number;
        totalPages: number;
        totalItems: number;
        currentPage: number;
        nextPage: number;
    }>;
    findOne(term: string): Promise<Recipproduction>;
}
