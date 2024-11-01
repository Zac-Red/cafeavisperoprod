import { CreateDetailproductionDto } from './dto/create-detailproduction.dto';
import { EntityManager, Repository } from 'typeorm';
import { Detailproduction } from './entities/detailproduction.entity';
import { RecipproductionService } from 'src/recipproduction/recipproduction.service';
import { HandleDBErrors, UuidAdapter } from 'src/common/adapters';
import { Recipproduction } from 'src/recipproduction/entities/recipproduction.entity';
export declare class DetailproductionService {
    private readonly detailproductionRepository;
    private readonly recipproductionservice;
    private readonly DBErrors;
    private readonly uuidAdapter;
    constructor(detailproductionRepository: Repository<Detailproduction>, recipproductionservice: RecipproductionService, DBErrors: HandleDBErrors, uuidAdapter: UuidAdapter);
    create(createDetailproductionDto: CreateDetailproductionDto, manager?: EntityManager): Promise<any>;
    findOne(term: string): Promise<{
        recipproduction: Recipproduction;
        detailsproduction: Detailproduction[];
    }>;
}
