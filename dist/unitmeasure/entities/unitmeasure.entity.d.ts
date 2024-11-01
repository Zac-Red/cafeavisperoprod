import { Detailproduction } from "src/detailproduction/entities/detailproduction.entity";
import { Inventoryproduct } from "src/inventoryproduct/entities/inventoryproduct.entity";
import { Inventoryrawmaterial } from "src/inventoryrawmaterial/entities/inventoryrawmaterial.entity";
import { Product } from "src/products/entities/product.entity";
import { Rawmaterial } from "src/rawmaterial/entities/rawmaterial.entity";
import { Conversionrawmaterial } from "src/refinerawmaterial/entities/conversionrawmaterial.entity";
import { Refinerawmaterial } from "src/refinerawmaterial/entities/refinerawmaterial.entity";
import { Salesdetail } from "src/salesdetail/entities/salesdetail.entity";
import { ShoppingDetail } from "src/shoppingdetail/entities/shoppingdetail.entity";
export declare class Unitmeasure {
    id: number;
    name: string;
    description: string;
    conversionfactor: number;
    deleted: boolean;
    product: Product;
    rawmaterial: Rawmaterial;
    shoppingdetail: ShoppingDetail;
    saledetail: Salesdetail;
    inventoryrawmaterial: Inventoryrawmaterial;
    inventoryproduct: Inventoryproduct;
    detailproduction: Detailproduction;
    conversionrawmaterial: Conversionrawmaterial;
    refinerawmaterial: Refinerawmaterial;
    createdAt: Date;
    updatedAt: Date;
}
