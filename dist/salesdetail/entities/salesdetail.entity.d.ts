import { Product } from "src/products/entities/product.entity";
import { Sale } from "src/sales/entities/sale.entity";
import { Unitmeasure } from "src/unitmeasure/entities/unitmeasure.entity";
export declare class Salesdetail {
    id: string;
    price: number;
    amount: number;
    subtotal: number;
    unitmeasureId: Unitmeasure;
    productId: Product;
    saleId: Sale;
}
