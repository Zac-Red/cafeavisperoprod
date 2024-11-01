import { Recipproduction } from "src/recipproduction/entities/recipproduction.entity";
export declare class Production {
    id: string;
    amount: number;
    recipproductionId: Recipproduction;
    createdAt: Date;
}
