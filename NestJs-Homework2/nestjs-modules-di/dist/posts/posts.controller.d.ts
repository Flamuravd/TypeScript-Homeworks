import { PostsService } from './posts.service';
import { PostEntity } from './post.entity';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    findAll(): PostEntity[];
    findOne(id: string): PostEntity | undefined;
    findByAuthor(authorId: string): PostEntity[];
    create(post: Omit<PostEntity, 'id'>): PostEntity;
    update(id: string, updatedPost: Partial<PostEntity>): PostEntity | undefined;
    delete(id: string): boolean;
}
