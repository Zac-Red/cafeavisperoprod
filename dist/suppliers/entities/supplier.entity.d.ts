import { Shopping } from "src/shopping/entities/shopping.entity";
import { Rawmaterial } from "../../rawmaterial/entities/rawmaterial.entity";
export declare class Supplier {
    id: string;
    personeria: string;
    namecontact: string;
    tel: number;
    dpi: number;
    address: string;
    deleted: boolean;
    rawmaterial: Rawmaterial;
    shopping: Shopping;
}
