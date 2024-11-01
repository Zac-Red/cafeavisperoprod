import { SalesService } from './sales.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { QueryParamsReportTopClientesSaleDto, QueryParamsSaleDto } from './dto/query-params-sales.dto';
export declare class SalesController {
    private readonly salesService;
    constructor(salesService: SalesService);
    create(createSaleDto: CreateSaleDto): Promise<{
        saleComplet: any;
    }>;
    findAll(queryparams: QueryParamsSaleDto): Promise<{
        items: import("src/sales/entities/sale.entity").Sale[];
        itemsPerPage: number;
        totalPages: number;
        totalItems: number;
        currentPage: number;
        nextPage: number;
    }>;
    reportTopClients(queryparams: QueryParamsReportTopClientesSaleDto): Promise<any[]>;
    findOne(id: string): Promise<import("src/sales/entities/sale.entity").Sale>;
    revertSale(saleId: string): Promise<void>;
}
