import { RecipproductionService } from './recipproduction.service';
import { CreateRecipproductionDto } from './dto/create-recipproduction.dto';
import { QueryParamsRecipProductionDto } from './dto/query-params-recipproduction.dto';
export declare class RecipproductionController {
    private readonly recipproductionService;
    constructor(recipproductionService: RecipproductionService);
    create(createRecipproductionDto: CreateRecipproductionDto): Promise<{
        recipproductioncomplet: any;
    }>;
    findAll(queryparams: QueryParamsRecipProductionDto): Promise<{
        items: import("src/recipproduction/entities/recipproduction.entity").Recipproduction[];
        itemsPerPage: number;
        totalPages: number;
        totalItems: number;
        currentPage: number;
        nextPage: number;
    }>;
    findOne(term: string): Promise<import("src/recipproduction/entities/recipproduction.entity").Recipproduction>;
}
