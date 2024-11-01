import { UnitmeasureService } from './unitmeasure.service';
import { CreateUnitmeasureDto } from './dto/create-unitmeasure.dto';
import { UpdateUnitmeasureDto } from './dto/update-unitmeasure.dto';
import { QueryParamsUnitmeasureDto } from './dto/query-params-unitmeasure.dto';
export declare class UnitmeasureController {
    private readonly unitmeasureService;
    constructor(unitmeasureService: UnitmeasureService);
    create(createUnitmeasureDto: CreateUnitmeasureDto): Promise<import("src/unitmeasure/entities/unitmeasure.entity").Unitmeasure[]>;
    findAll(queryparams: QueryParamsUnitmeasureDto): Promise<{
        items: import("src/unitmeasure/entities/unitmeasure.entity").Unitmeasure[];
        itemsPerPage: number;
        totalPages: number;
        totalItems: number;
        currentPage: number;
        nextPage: number;
    }>;
    findOne(term: string): Promise<import("src/unitmeasure/entities/unitmeasure.entity").Unitmeasure>;
    update(id: string, updateUnitmeasureDto: UpdateUnitmeasureDto): Promise<import("src/unitmeasure/entities/unitmeasure.entity").Unitmeasure>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
