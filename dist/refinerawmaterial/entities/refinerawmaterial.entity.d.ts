import { Rawmaterial } from "src/rawmaterial/entities/rawmaterial.entity";
import { Unitmeasure } from "src/unitmeasure/entities/unitmeasure.entity";
export declare class Refinerawmaterial {
    id: string;
    amount: number;
    rawmaterialId: Rawmaterial;
    unitmeasureId: Unitmeasure;
    createdAt: Date;
}
