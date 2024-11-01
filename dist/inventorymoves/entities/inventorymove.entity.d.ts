import { Inventoryproduct } from "src/inventoryproduct/entities/inventoryproduct.entity";
import { Inventoryrawmaterial } from "src/inventoryrawmaterial/entities/inventoryrawmaterial.entity";
export declare class Inventorymove {
    id: number;
    name: string;
    description: string;
    deleted: boolean;
    inventoryrawmaterial: Inventoryrawmaterial;
    inventoryproduct: Inventoryproduct;
    createdAt: Date;
    updatedAt: Date;
}
