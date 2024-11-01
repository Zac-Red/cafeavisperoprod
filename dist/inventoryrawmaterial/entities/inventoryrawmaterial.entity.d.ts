import { Inventorymove } from "src/inventorymoves/entities/inventorymove.entity";
import { Rawmaterial } from "src/rawmaterial/entities/rawmaterial.entity";
import { Unitmeasure } from "src/unitmeasure/entities/unitmeasure.entity";
export declare class Inventoryrawmaterial {
    id: string;
    amount: number;
    rawmaterialId: Rawmaterial;
    unitmeasureId: Unitmeasure;
    inventorymoveId: Inventorymove;
    createdAt: Date;
}
