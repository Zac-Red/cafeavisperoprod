import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './entities/customer.entity';
import { Repository } from 'typeorm';
import { HandleDBErrors, UuidAdapter } from 'src/common/adapters';
import { QueryParamsCustomers } from './dto/query-params-customers.dto';
export declare class CustomersService {
    private readonly customerRepository;
    private readonly uuidAdapter;
    private readonly DBErrors;
    constructor(customerRepository: Repository<Customer>, uuidAdapter: UuidAdapter, DBErrors: HandleDBErrors);
    create(createCustomerDto: CreateCustomerDto): Promise<Customer[]>;
    findAll(queryparamscustomers: QueryParamsCustomers): Promise<{
        items: Customer[];
        itemsPerPage: number;
        totalPages: number;
        totalItems: number;
        currentPage: number;
        nextPage: number;
    }>;
    findOne(term: string): Promise<Customer>;
    update(id: string, updateCustomerDto: UpdateCustomerDto): Promise<Customer>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
