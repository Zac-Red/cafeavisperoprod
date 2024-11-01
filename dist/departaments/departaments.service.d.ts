import { Departament } from './entities/departament.entity';
import { CreateDepartamentDto } from './dto/create-departament.dto';
import { UpdateDepartamentDto } from './dto/update-departament.dto';
import { Repository } from 'typeorm';
export declare class DepartamentsService {
    private readonly departamentRepository;
    constructor(departamentRepository: Repository<Departament>);
    create(createDepartamentDto: CreateDepartamentDto): Promise<{
        name: string;
    }>;
    findAll(): Promise<Departament[]>;
    findOne(term: string): Promise<Departament>;
    update(id: string, updateDepartamentDto: UpdateDepartamentDto): Promise<Departament>;
    remove(id: string): Promise<void>;
}
