import { Rawmaterial } from "src/rawmaterial/entities/rawmaterial.entity";
import { Recipproduction } from "src/recipproduction/entities/recipproduction.entity";
import { Unitmeasure } from "src/unitmeasure/entities/unitmeasure.entity";
export declare class Detailproduction {
    id: string;
    amount: number;
    unitmeasureId: Unitmeasure;
    rawmaterialId: Rawmaterial;
    recipproductionId: Recipproduction;
}
