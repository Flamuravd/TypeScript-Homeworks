/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PostEntity } from './post.entity';

@Injectable()
export class PostsService {
  private posts: PostEntity[] = [
    { id: 1, title: 'First Post', content: 'Hello World', authorId: 1 },
    { id: 2, title: 'Second Post', content: 'Another post', authorId: 2 },
    { id: 3, title: 'Third Post', content: 'More content', authorId: 1 }, 
  ];

  findByAuthor(authorId: number): PostEntity[] {
    return this.posts.filter(post => post.authorId === authorId);
  }

  findAll(): PostEntity[] {
    return this.posts;
  }

  findOne(id: number): PostEntity | undefined {
    return this.posts.find(post => post.id === id);
  }

  create(post: Omit<PostEntity, 'id'>): PostEntity {
    const newPost = { id: this.posts.length + 1, ...post };
    this.posts.push(newPost);
    return newPost;
  }

  update(id: number, updatedPost: Partial<PostEntity>): PostEntity | undefined {
    const post = this.findOne(id);
    if (!post) return undefined;

    Object.assign(post, updatedPost);
    return post;
  }

  delete(id: number): boolean {
    const index = this.posts.findIndex(post => post.id === id);
    if (index === -1) return false;

    this.posts.splice(index, 1);
    return true;
  }
}