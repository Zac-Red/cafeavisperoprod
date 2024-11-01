import { DetailproductionService } from './detailproduction.service';
export declare class DetailproductionController {
    private readonly detailproductionService;
    constructor(detailproductionService: DetailproductionService);
    findOne(term: string): Promise<{
        recipproduction: import("src/recipproduction/entities/recipproduction.entity").Recipproduction;
        detailsproduction: import("src/detailproduction/entities/detailproduction.entity").Detailproduction[];
    }>;
}
