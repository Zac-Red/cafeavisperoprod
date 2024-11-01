import { Detailproduction } from "src/detailproduction/entities/detailproduction.entity";
import { Production } from "src/productions/entities/production.entity";
import { Product } from "src/products/entities/product.entity";
export declare class Recipproduction {
    id: string;
    name: string;
    amount: number;
    productId: Product;
    detailproduction: Detailproduction;
    production: Production;
    createdAt: Date;
}
