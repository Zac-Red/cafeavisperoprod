import { Repository } from "typeorm";
export declare function createRegister<T>(repository: Repository<T>, data: any): Promise<T[]>;
export declare function createRegisterForTransaction(data: any, manager: any, entity: any): Promise<any>;
