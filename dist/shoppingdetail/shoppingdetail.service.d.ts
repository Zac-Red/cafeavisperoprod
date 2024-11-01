import { CreateShoppingdetailDto } from './dto/create-shoppingdetail.dto';
import { ShoppingDetail } from './entities/shoppingdetail.entity';
import { HandleDBErrors, UuidAdapter } from 'src/common/adapters';
import { EntityManager, Repository } from 'typeorm';
import { ShoppingService } from 'src/shopping/shopping.service';
import { Shopping } from 'src/shopping/entities/shopping.entity';
export declare class ShoppingdetailService {
    private readonly shoppingdetailRepository;
    private readonly shoppingservice;
    private readonly DBErrors;
    private readonly uuidAdapter;
    constructor(shoppingdetailRepository: Repository<ShoppingDetail>, shoppingservice: ShoppingService, DBErrors: HandleDBErrors, uuidAdapter: UuidAdapter);
    create(createShoppingdetailDto: CreateShoppingdetailDto, manager?: EntityManager): Promise<any>;
    findOne(term: string): Promise<{
        shopping: Shopping;
        shoppingdetails: ShoppingDetail[];
    }>;
    remove(id: number): string;
}
