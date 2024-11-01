import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { QueryParamsCustomers } from './dto/query-params-customers.dto';
export declare class CustomersController {
    private readonly customersService;
    constructor(customersService: CustomersService);
    create(createCustomerDto: CreateCustomerDto): Promise<import("src/customers/entities/customer.entity").Customer[]>;
    findAll(QueryParams: QueryParamsCustomers): Promise<{
        items: import("src/customers/entities/customer.entity").Customer[];
        itemsPerPage: number;
        totalPages: number;
        totalItems: number;
        currentPage: number;
        nextPage: number;
    }>;
    findOne(term: string): Promise<import("src/customers/entities/customer.entity").Customer>;
    update(id: string, updateCustomerDto: UpdateCustomerDto): Promise<import("src/customers/entities/customer.entity").Customer>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
