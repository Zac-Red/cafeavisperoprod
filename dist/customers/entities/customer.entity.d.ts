import { Sale } from "src/sales/entities/sale.entity";
export declare class Customer {
    id: string;
    name: string;
    phone: number;
    nit: string;
    createdAt: Date;
    updatedAt: Date;
    deleted: boolean;
    sale: Sale;
}
