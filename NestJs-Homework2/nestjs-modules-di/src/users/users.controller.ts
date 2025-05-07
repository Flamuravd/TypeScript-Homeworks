/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(): User[] {
    return this.usersService.findAll(); 
  }

  @Get(':id')
  findOne(@Param('id') id: string): User | undefined { 
    return this.usersService.findOne(+id);
  }

  @Post()
  create(@Body() user: Omit<User, 'id'>): User {
    return this.usersService.create(user); 
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updatedUser: Partial<User>,
  ): User | undefined { 
    return this.usersService.update(+id, updatedUser);
  }

  @Delete(':id')
  delete(@Param('id') id: string): boolean {
    return this.usersService.delete(+id); 
  }
}