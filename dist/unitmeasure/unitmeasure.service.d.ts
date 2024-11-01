import { CreateUnitmeasureDto } from './dto/create-unitmeasure.dto';
import { UpdateUnitmeasureDto } from './dto/update-unitmeasure.dto';
import { HandleDBErrors } from 'src/common/adapters';
import { Repository } from 'typeorm';
import { Unitmeasure } from './entities/unitmeasure.entity';
import { QueryParamsUnitmeasureDto } from './dto/query-params-unitmeasure.dto';
export declare class UnitmeasureService {
    private readonly unitMeasureRepository;
    private readonly DBErrors;
    constructor(unitMeasureRepository: Repository<Unitmeasure>, DBErrors: HandleDBErrors);
    create(createUnitmeasureDto: CreateUnitmeasureDto): Promise<Unitmeasure[]>;
    findAll(queryparamsunitmeasureDto: QueryParamsUnitmeasureDto): Promise<{
        items: Unitmeasure[];
        itemsPerPage: number;
        totalPages: number;
        totalItems: number;
        currentPage: number;
        nextPage: number;
    }>;
    findOne(term: string): Promise<Unitmeasure>;
    update(id: number, updateUnitmeasureDto: UpdateUnitmeasureDto): Promise<Unitmeasure>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
