import { CreateRefinerawmaterialDto } from './dto/create-refinerawmaterial.dto';
import { DataSource, Repository } from 'typeorm';
import { Refinerawmaterial } from './entities/refinerawmaterial.entity';
import { HandleDBErrors, UuidAdapter } from 'src/common/adapters';
import { RawmaterialService } from 'src/rawmaterial/rawmaterial.service';
import { QueryParamsRefineRawMaterialDto } from './dto/query-params-refinerawmaterial.dto';
import { Conversionrawmaterial } from './entities/conversionrawmaterial.entity';
import { CreateconversionrawmaterialDto } from './dto/create-conversiorawmaterial.dto';
import { UnitmeasureService } from 'src/unitmeasure/unitmeasure.service';
import { InventoryrawmaterialService } from 'src/inventoryrawmaterial/inventoryrawmaterial.service';
export declare class RefinerawmaterialService {
    private readonly refinerawmaterialRepository;
    private readonly conversionrawmaterialRepository;
    private readonly rawmaterialservice;
    private readonly unitmeasureservice;
    private readonly inventoryrawmaterialservice;
    private readonly DBErrors;
    private readonly uuidAdapter;
    private readonly dataSource;
    constructor(refinerawmaterialRepository: Repository<Refinerawmaterial>, conversionrawmaterialRepository: Repository<Conversionrawmaterial>, rawmaterialservice: RawmaterialService, unitmeasureservice: UnitmeasureService, inventoryrawmaterialservice: InventoryrawmaterialService, DBErrors: HandleDBErrors, uuidAdapter: UuidAdapter, dataSource: DataSource);
    create(createRefinerawmaterialDto: CreateRefinerawmaterialDto): Promise<{
        refinerawmaterialcomplet: any;
    }>;
    findAll(queryparamsrefinerawmaterialDto: QueryParamsRefineRawMaterialDto): Promise<{
        items: Refinerawmaterial[];
        itemsPerPage: number;
        totalPages: number;
        totalItems: number;
        currentPage: number;
        nextPage: number;
    }>;
    findOne(term: string): Promise<Refinerawmaterial>;
    revertRefinement(refinementId: string): Promise<void>;
    convertRawMaterial(createconversionrawmaterialDto: CreateconversionrawmaterialDto): Promise<{
        sourceMaterial: import("src/rawmaterial/entities/rawmaterial.entity").Rawmaterial;
        targetMaterial: import("src/rawmaterial/entities/rawmaterial.entity").Rawmaterial;
    }>;
}
