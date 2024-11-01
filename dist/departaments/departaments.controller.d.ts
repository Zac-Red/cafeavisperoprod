import { DepartamentsService } from './departaments.service';
import { CreateDepartamentDto } from './dto/create-departament.dto';
import { UpdateDepartamentDto } from './dto/update-departament.dto';
export declare class DepartamentsController {
    private readonly departamentsService;
    constructor(departamentsService: DepartamentsService);
    create(createDepartamentDto: CreateDepartamentDto): Promise<{
        name: string;
    }>;
    findAll(): Promise<import("src/departaments/entities/departament.entity").Departament[]>;
    findOne(term: string): Promise<import("src/departaments/entities/departament.entity").Departament>;
    update(id: string, updateDepartamentDto: UpdateDepartamentDto): Promise<import("src/departaments/entities/departament.entity").Departament>;
    remove(id: string): Promise<void>;
}
