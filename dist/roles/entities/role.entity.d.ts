import { User } from "src/auth/entities/user.entity";
export declare class Role {
    id: number;
    role: string;
    description: string;
    user: User;
    deleted: boolean;
}
