import { Customer } from "src/customers/entities/customer.entity";
import { Salesdetail } from "src/salesdetail/entities/salesdetail.entity";
export declare class Sale {
    id: string;
    total: number;
    createdAt: Date;
    customerId: Customer;
    salesdetail: Salesdetail;
}
