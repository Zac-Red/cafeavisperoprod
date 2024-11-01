import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';
import { Repository } from 'typeorm';
import { HandleDBErrors } from 'src/common/adapters';
export declare class RolesService {
    private readonly roleRepository;
    private readonly DBErrors;
    constructor(roleRepository: Repository<Role>, DBErrors: HandleDBErrors);
    create(createRoleDto: CreateRoleDto): Promise<Role[]>;
    findAll(): Promise<Role[]>;
    findOne(id: number): string;
    update(id: number, updateRoleDto: UpdateRoleDto): string;
    remove(id: number): string;
}
