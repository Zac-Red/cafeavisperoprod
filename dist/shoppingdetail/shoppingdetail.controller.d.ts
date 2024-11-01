import { ShoppingdetailService } from './shoppingdetail.service';
export declare class ShoppingdetailController {
    private readonly shoppingdetailService;
    constructor(shoppingdetailService: ShoppingdetailService);
    findOne(term: string): Promise<{
        shopping: import("src/shopping/entities/shopping.entity").Shopping;
        shoppingdetails: import("src/shoppingdetail/entities/shoppingdetail.entity").ShoppingDetail[];
    }>;
}
