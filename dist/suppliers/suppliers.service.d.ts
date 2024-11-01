import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { Supplier } from './entities/supplier.entity';
import { Repository } from 'typeorm';
import { QueryParamsSupplierDto } from './dto/query-params.dto';
import { UuidAdapter } from 'src/common/adapters/uui.adapter';
import { HandleDBErrors } from 'src/common/adapters';
export declare class SuppliersService {
    private readonly suppliersRepository;
    private readonly uuidAdapter;
    private readonly DBErrors;
    constructor(suppliersRepository: Repository<Supplier>, uuidAdapter: UuidAdapter, DBErrors: HandleDBErrors);
    create(createSupplierDto: CreateSupplierDto): Promise<Supplier[]>;
    findAll(queryparamssupplierDto: QueryParamsSupplierDto): Promise<{
        items: Supplier[];
        itemsPerPage: number;
        totalPages: number;
        totalItems: number;
        currentPage: number;
        nextPage: number;
    }>;
    findOne(term: string): Promise<Supplier>;
    update(id: string, updateSupplierDto: UpdateSupplierDto): Promise<Supplier>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
