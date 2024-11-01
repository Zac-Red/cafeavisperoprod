import { ShoppingDetail } from "src/shoppingdetail/entities/shoppingdetail.entity";
import { Supplier } from "src/suppliers/entities/supplier.entity";
export declare class Shopping {
    id: string;
    commercialdocument: string;
    total: number;
    datecommercialdocument: Date;
    createdAt: Date;
    supplierId: Supplier;
    shoppingdetail: ShoppingDetail;
}
