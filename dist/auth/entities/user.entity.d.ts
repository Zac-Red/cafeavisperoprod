import { Role } from "src/roles/entities/role.entity";
export declare class User {
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
}
