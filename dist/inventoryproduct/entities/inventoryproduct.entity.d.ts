import { Inventorymove } from "src/inventorymoves/entities/inventorymove.entity";
import { Product } from "src/products/entities/product.entity";
import { Unitmeasure } from "src/unitmeasure/entities/unitmeasure.entity";
export declare class Inventoryproduct {
    id: string;
    amount: number;
    productId: Product;
    unitmeasureId: Unitmeasure;
    inventorymoveId: Inventorymove;
    createdAt: Date;
}
