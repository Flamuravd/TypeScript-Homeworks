/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable prettier/prettier */
import { Controller, Get, Post as PostDecorator, Body, Param, Put, Delete } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostEntity } from './post.entity';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  findAll(): PostEntity[] {
    return this.postsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): PostEntity | undefined {
    return this.postsService.findOne(+id);
  }

  // Add this new endpoint
  @Get('author/:authorId')
  findByAuthor(@Param('authorId') authorId: string): PostEntity[] {
    return this.postsService.findByAuthor(+authorId);
  }

  @PostDecorator()
  create(@Body() post: Omit<PostEntity, 'id'>): PostEntity {
    return this.postsService.create(post);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatedPost: Partial<PostEntity>): PostEntity | undefined {
    return this.postsService.update(+id, updatedPost);
  }

  @Delete(':id')
  delete(@Param('id') id: string): boolean {
    return this.postsService.delete(+id);
  }
}