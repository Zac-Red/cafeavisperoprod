import { SalesdetailService } from './salesdetail.service';
export declare class SalesdetailController {
    private readonly salesdetailService;
    constructor(salesdetailService: SalesdetailService);
    findOne(id: string): Promise<{
        sale: import("src/sales/entities/sale.entity").Sale;
        salesdetails: import("src/salesdetail/entities/salesdetail.entity").Salesdetail[];
    }>;
}
