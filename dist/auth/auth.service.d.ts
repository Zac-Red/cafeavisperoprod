import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { User } from './entities/user.entity';
import { UuidAdapter } from 'src/common/adapters/uui.adapter';
import { QueryParamsUserDto } from './dto/query-params-user.dto';
import { HandleDBErrors } from 'src/common/adapters';
import { Role } from 'src/roles/entities/role.entity';
export declare class AuthService {
    private readonly userRepository;
    private readonly roleRepository;
    private readonly jwtService;
    private readonly uuidAdapter;
    private readonly DBErrors;
    constructor(userRepository: Repository<User>, roleRepository: Repository<Role>, jwtService: JwtService, uuidAdapter: UuidAdapter, DBErrors: HandleDBErrors);
    create(createAuthDto: CreateUserDto): Promise<{
        id: string;
        email: string;
        password: string;
        firstname: string;
        lastname: string;
        dpi: number;
        phone: number;
        roleId: Role;
        IsActive: boolean;
        deleted: boolean;
    }>;
    login(loginuserDto: LoginUserDto): Promise<{
        username: string;
        token: string;
    }>;
    checkAuthStatus(user: User): Promise<{
        token: string;
    }>;
    private getJwtToken;
    findAll(queryparamsuserDto: QueryParamsUserDto): Promise<{
        items: User[];
        itemsPerPage: number;
        totalPages: number;
        totalItems: number;
        currentPage: number;
        nextPage: number;
    }>;
    findOne(term: string): Promise<User>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<User>;
    remove(id: string): Promise<{
        message: string;
    }>;
    seedusercreate(): Promise<{
        id: string;
        email: string;
        password: string;
        firstname: string;
        lastname: string;
        dpi: number;
        phone: number;
        roleId: Role;
        IsActive: boolean;
        deleted: boolean;
    }>;
}
