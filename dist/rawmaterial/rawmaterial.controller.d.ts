import { RawmaterialService } from './rawmaterial.service';
import { CreateRawmaterialDto } from './dto/create-rawmaterial.dto';
import { UpdateRawmaterialDto } from './dto/update-rawmaterial.dto';
import { QueryParamsRawMaterials, QueryParamsReportTopRawmaterialShoppDto } from './dto/query-params.dto';
export declare class RawmaterialController {
    private readonly rawmaterialService;
    constructor(rawmaterialService: RawmaterialService);
    create(createRawmaterialDto: CreateRawmaterialDto): Promise<import("src/rawmaterial/entities/rawmaterial.entity").Rawmaterial[]>;
    findAll(QueryParams: QueryParamsRawMaterials): Promise<{
        items: import("src/rawmaterial/entities/rawmaterial.entity").Rawmaterial[];
        itemsPerPage: number;
        totalPages: number;
        totalItems: number;
        currentPage: number;
        nextPage: number;
    }>;
    reportTopRawMaterialShopping(queryparams: QueryParamsReportTopRawmaterialShoppDto): Promise<any[]>;
    findOne(id: string): Promise<import("src/rawmaterial/entities/rawmaterial.entity").Rawmaterial>;
    update(id: string, updateRawmaterialDto: UpdateRawmaterialDto): Promise<{
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
        shoppingdetail: import("src/shoppingdetail/entities/shoppingdetail.entity").ShoppingDetail;
        detailproduction: import("src/detailproduction/entities/detailproduction.entity").Detailproduction;
        refinerawmaterial: import("src/refinerawmaterial/entities/refinerawmaterial.entity").Refinerawmaterial;
        conversionrawmaterial: import("src/refinerawmaterial/entities/conversionrawmaterial.entity").Conversionrawmaterial;
    } & import("src/rawmaterial/entities/rawmaterial.entity").Rawmaterial>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
