import { CreateRawmaterialDto } from './dto/create-rawmaterial.dto';
import { UpdateRawmaterialDto } from './dto/update-rawmaterial.dto';
import { DataSource, EntityManager, Repository } from 'typeorm';
import { Rawmaterial } from './entities/rawmaterial.entity';
import { UuidAdapter } from 'src/common/adapters/uui.adapter';
import { HandleDBErrors } from 'src/common/adapters';
import { QueryParamsRawMaterials, QueryParamsReportTopRawmaterialShoppDto } from './dto/query-params.dto';
import { SuppliersService } from 'src/suppliers/suppliers.service';
import { UnitmeasureService } from 'src/unitmeasure/unitmeasure.service';
import { ShoppingDetail } from 'src/shoppingdetail/entities/shoppingdetail.entity';
export declare class RawmaterialService {
    private readonly rawMaterialRepository;
    private readonly supplierservices;
    private readonly unitmeasureservices;
    private readonly dataSource;
    private readonly DBErrors;
    private readonly uuidAdapter;
    constructor(rawMaterialRepository: Repository<Rawmaterial>, supplierservices: SuppliersService, unitmeasureservices: UnitmeasureService, dataSource: DataSource, DBErrors: HandleDBErrors, uuidAdapter: UuidAdapter);
    create(createRawmaterialDto: CreateRawmaterialDto): Promise<Rawmaterial[]>;
    findAll(queryparamsrawmaterial: QueryParamsRawMaterials): Promise<{
        items: Rawmaterial[];
        itemsPerPage: number;
        totalPages: number;
        totalItems: number;
        currentPage: number;
        nextPage: number;
    }>;
    findTopRawMaterialShopping(queryparamsreporttoprawmaterialshoppDto: QueryParamsReportTopRawmaterialShoppDto): Promise<any[]>;
    findOne(term: string): Promise<Rawmaterial>;
    update(id: string, updateRawmaterialDto: UpdateRawmaterialDto, manager?: EntityManager): Promise<{
        id: string;
        name: string;
        description: string;
        url: string;
        price: number;
        stock: number;
        createdAt: Date;
        updatedAt: Date;
        deleted: boolean;
        supplierId: import("src/suppliers/entities/supplier.entity").Supplier;
        unitmeasureId: import("src/unitmeasure/entities/unitmeasure.entity").Unitmeasure;
        rawmaterialinventory: import("src/inventoryrawmaterial/entities/inventoryrawmaterial.entity").Inventoryrawmaterial;
        shoppingdetail: ShoppingDetail;
        detailproduction: import("src/detailproduction/entities/detailproduction.entity").Detailproduction;
        refinerawmaterial: import("src/refinerawmaterial/entities/refinerawmaterial.entity").Refinerawmaterial;
        conversionrawmaterial: import("src/refinerawmaterial/entities/conversionrawmaterial.entity").Conversionrawmaterial;
    } & Rawmaterial>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
