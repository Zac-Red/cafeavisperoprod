import { RefinerawmaterialService } from './refinerawmaterial.service';
import { CreateRefinerawmaterialDto } from './dto/create-refinerawmaterial.dto';
import { QueryParamsRefineRawMaterialDto } from './dto/query-params-refinerawmaterial.dto';
export declare class RefinerawmaterialController {
    private readonly refinerawmaterialService;
    constructor(refinerawmaterialService: RefinerawmaterialService);
    create(createRefinerawmaterialDto: CreateRefinerawmaterialDto): Promise<{
        refinerawmaterialcomplet: any;
    }>;
    findAll(queryparams: QueryParamsRefineRawMaterialDto): Promise<{
        items: import("src/refinerawmaterial/entities/refinerawmaterial.entity").Refinerawmaterial[];
        itemsPerPage: number;
        totalPages: number;
        totalItems: number;
        currentPage: number;
        nextPage: number;
    }>;
    revertRefineRaw(refineId: string): Promise<void>;
}
