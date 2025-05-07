import { PostEntity } from './post.entity';
export declare class PostsService {
    private posts;
    findByAuthor(authorId: number): PostEntity[];
    findAll(): PostEntity[];
    findOne(id: number): PostEntity | undefined;
    create(post: Omit<PostEntity, 'id'>): PostEntity;
    update(id: number, updatedPost: Partial<PostEntity>): PostEntity | undefined;
    delete(id: number): boolean;
}
