import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { User } from './entities/user.entity';
import { QueryParamsUserDto } from './dto/query-params-user.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    create(createUserDto: CreateUserDto): Promise<{
        id: string;
        email: string;
        password: string;
        firstname: string;
        lastname: string;
        dpi: number;
        phone: number;
        roleId: import("src/roles/entities/role.entity").Role;
        IsActive: boolean;
        deleted: boolean;
    }>;
    login(loginUserDto: LoginUserDto): Promise<{
        username: string;
        token: string;
    }>;
    checkAuthStatus(user: User): Promise<{
        token: string;
    }>;
    seeduser(): Promise<{
        id: string;
        email: string;
        password: string;
        firstname: string;
        lastname: string;
        dpi: number;
        phone: number;
        roleId: import("src/roles/entities/role.entity").Role;
        IsActive: boolean;
        deleted: boolean;
    }>;
    findAll(queryparams: QueryParamsUserDto): Promise<{
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
}
