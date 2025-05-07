import { User } from './user.entity';
export declare class UsersService {
    private users;
    findAll(): User[];
    findOne(id: number): User | undefined;
    create(user: Omit<User, 'id'>): User;
    update(id: number, updatedUser: Partial<User>): User | undefined;
    delete(id: number): boolean;
}
