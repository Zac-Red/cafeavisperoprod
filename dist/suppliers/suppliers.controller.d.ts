import { SuppliersService } from './suppliers.service';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { QueryParamsSupplierDto } from './dto/query-params.dto';
export declare class SuppliersController {
    private readonly suppliersService;
    constructor(suppliersService: SuppliersService);
    create(createSupplierDto: CreateSupplierDto): Promise<import("src/suppliers/entities/supplier.entity").Supplier[]>;
    findAll(queryparams: QueryParamsSupplierDto): Promise<{
        items: import("src/suppliers/entities/supplier.entity").Supplier[];
        itemsPerPage: number;
        totalPages: number;
        totalItems: number;
        currentPage: number;
        nextPage: number;
    }>;
    findOne(term: string): Promise<import("src/suppliers/entities/supplier.entity").Supplier>;
    update(id: string, updateSupplierDto: UpdateSupplierDto): Promise<import("src/suppliers/entities/supplier.entity").Supplier>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
