import { CreateSalesdetailDto } from './dto/create-salesdetail.dto';
import { UpdateSalesdetailDto } from './dto/update-salesdetail.dto';
import { Salesdetail } from './entities/salesdetail.entity';
import { EntityManager, Repository } from 'typeorm';
import { HandleDBErrors, UuidAdapter } from 'src/common/adapters';
import { SalesService } from 'src/sales/sales.service';
import { Sale } from 'src/sales/entities/sale.entity';
export declare class SalesdetailService {
    private readonly salesdetailRepository;
    private readonly saleservice;
    private readonly DBErrors;
    private readonly uuidAdapter;
    constructor(salesdetailRepository: Repository<Salesdetail>, saleservice: SalesService, DBErrors: HandleDBErrors, uuidAdapter: UuidAdapter);
    create(createSalesdetailDto: CreateSalesdetailDto, manager?: EntityManager): Promise<any>;
    findOne(id: string): Promise<{
        sale: Sale;
        salesdetails: Salesdetail[];
    }>;
    update(id: number, updateSalesdetailDto: UpdateSalesdetailDto): string;
    remove(id: number): string;
}
