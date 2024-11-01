import { ShoppingService } from './shopping.service';
import { CreateShoppingDto } from './dto/create-shopping.dto';
import { QueryParamsShoppingDto } from './dto/query-params-shopping.dto';
export declare class ShoppingController {
    private readonly shoppingService;
    constructor(shoppingService: ShoppingService);
    create(createShoppingDto: CreateShoppingDto): Promise<{
        shoppingComplet: any;
    }>;
    findAll(queryparams: QueryParamsShoppingDto): Promise<{
        items: import("src/shopping/entities/shopping.entity").Shopping[];
        itemsPerPage: number;
        totalPages: number;
        totalItems: number;
        currentPage: number;
        nextPage: number;
    }>;
    findOne(id: string): Promise<import("src/shopping/entities/shopping.entity").Shopping>;
    revertShopping(shoppingId: string): Promise<void>;
}
