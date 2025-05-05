/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Delete, Body, Param, Query, NotFoundException } from '@nestjs/common';

interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
}

@Controller('/books')
export class BooksController {
  private books: Book[] = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: 12.99 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', price: 10.50 },
    { id: 3, title: '1984', author: 'George Orwell', price: 8.75 },
    { id: 4, title: 'The Hobbit', author: 'J.R.R. Tolkien', price: 14.99 },
    { id: 5, title: 'Pride and Prejudice', author: 'Jane Austen', price: 9.99 },
  ];

  @Get()
  getAllBooks(@Query('minPrice') minPrice?: number, @Query('author') author?: string) {
    let result = [...this.books];
    
    if (minPrice) {
      result = result.filter(book => book.price >= +minPrice);
    }
    
    if (author) {
      result = result.filter(book => 
        book.author.toLowerCase().includes(author.toLowerCase())
      );
    }
    
    return result;
  }

  @Get(':id')
  getBookById(@Param('id') id: string) {
    const book = this.books.find(b => b.id === +id);
    if (!book) throw new NotFoundException('Book not found');
    return book;
  }

  @Post()
  createBook(@Body() newBook: Omit<Book, 'id'>) {
    const newId = Math.max(...this.books.map(b => b.id)) + 1;
    const book = { id: newId, ...newBook };
    this.books.push(book);
    return book;
  }

  @Put(':id')
  updateBook(@Param('id') id: string, @Body() updateData: Omit<Book, 'id'>) {
    const index = this.books.findIndex(b => b.id === +id);
    if (index === -1) throw new NotFoundException('Book not found');
    
    this.books[index] = { ...this.books[index], ...updateData };
    return this.books[index];
  }

  @Delete(':id')
  deleteBook(@Param('id') id: string) {
    const index = this.books.findIndex(b => b.id === +id);
    if (index === -1) throw new NotFoundException('Book not found');
    
    this.books.splice(index, 1);
    return { message: 'Book deleted successfully' };
  }
}