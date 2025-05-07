import { UsersService } from './users.service';
import { User } from './user.entity';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): User[];
    findOne(id: string): User | undefined;
    create(user: Omit<User, 'id'>): User;
    update(id: string, updatedUser: Partial<User>): User | undefined;
    delete(id: string): boolean;
}
