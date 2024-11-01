import { Rawmaterial } from "src/rawmaterial/entities/rawmaterial.entity";
import { Shopping } from "src/shopping/entities/shopping.entity";
import { Unitmeasure } from "src/unitmeasure/entities/unitmeasure.entity";
export declare class ShoppingDetail {
    id: string;
    price: number;
    amount: number;
    subtotal: number;
    unitmeasureId: Unitmeasure;
    rawmaterialId: Rawmaterial;
    shoppingId: Shopping;
}
