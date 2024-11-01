import { Detailproduction } from "src/detailproduction/entities/detailproduction.entity";
import { Inventoryrawmaterial } from "src/inventoryrawmaterial/entities/inventoryrawmaterial.entity";
import { Conversionrawmaterial } from "src/refinerawmaterial/entities/conversionrawmaterial.entity";
import { Refinerawmaterial } from "src/refinerawmaterial/entities/refinerawmaterial.entity";
import { ShoppingDetail } from "src/shoppingdetail/entities/shoppingdetail.entity";
import { Supplier } from "src/suppliers/entities/supplier.entity";
import { Unitmeasure } from "src/unitmeasure/entities/unitmeasure.entity";
export declare class Rawmaterial {
    id: string;
    name: string;
    description: string;
    url: string;
    price: number;
    stock: number;
    createdAt: Date;
    updatedAt: Date;
    deleted: boolean;
    supplierId: Supplier;
    unitmeasureId: Unitmeasure;
    rawmaterialinventory: Inventoryrawmaterial;
    shoppingdetail: ShoppingDetail;
    detailproduction: Detailproduction;
    refinerawmaterial: Refinerawmaterial;
    conversionrawmaterial: Conversionrawmaterial;
}
