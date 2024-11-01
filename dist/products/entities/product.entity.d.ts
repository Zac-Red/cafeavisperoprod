import { Inventoryproduct } from "src/inventoryproduct/entities/inventoryproduct.entity";
import { Recipproduction } from "src/recipproduction/entities/recipproduction.entity";
import { Salesdetail } from "src/salesdetail/entities/salesdetail.entity";
import { Unitmeasure } from "src/unitmeasure/entities/unitmeasure.entity";
export declare class Product {
    id: string;
    name: string;
    description: string;
    url: string;
    price: number;
    stock: number;
    unitmeasureId: Unitmeasure;
    productinventory: Inventoryproduct;
    saledetail: Salesdetail;
    recipproduction: Recipproduction;
    createdAt: Date;
    updatedAt: Date;
    deleted: boolean;
}
