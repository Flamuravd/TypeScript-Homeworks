"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksController = void 0;
const common_1 = require("@nestjs/common");
let BooksController = class BooksController {
    books = [
        { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: 12.99 },
        { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', price: 10.50 },
        { id: 3, title: '1984', author: 'George Orwell', price: 8.75 },
        { id: 4, title: 'The Hobbit', author: 'J.R.R. Tolkien', price: 14.99 },
        { id: 5, title: 'Pride and Prejudice', author: 'Jane Austen', price: 9.99 },
    ];
    getAllBooks(minPrice, author) {
        let result = [...this.books];
        if (minPrice) {
            result = result.filter(book => book.price >= +minPrice);
        }
        if (author) {
            result = result.filter(book => book.author.toLowerCase().includes(author.toLowerCase()));
        }
        return result;
    }
    getBookById(id) {
        const book = this.books.find(b => b.id === +id);
        if (!book)
            throw new common_1.NotFoundException('Book not found');
        return book;
    }
    createBook(newBook) {
        const newId = Math.max(...this.books.map(b => b.id)) + 1;
        const book = { id: newId, ...newBook };
        this.books.push(book);
        return book;
    }
    updateBook(id, updateData) {
        const index = this.books.findIndex(b => b.id === +id);
        if (index === -1)
            throw new common_1.NotFoundException('Book not found');
        this.books[index] = { ...this.books[index], ...updateData };
        return this.books[index];
    }
    deleteBook(id) {
        const index = this.books.findIndex(b => b.id === +id);
        if (index === -1)
            throw new common_1.NotFoundException('Book not found');
        this.books.splice(index, 1);
        return { message: 'Book deleted successfully' };
    }
};
exports.BooksController = BooksController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('minPrice')),
    __param(1, (0, common_1.Query)('author')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "getAllBooks", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "getBookById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "createBook", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "updateBook", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "deleteBook", null);
exports.BooksController = BooksController = __decorate([
    (0, common_1.Controller)('/books')
], BooksController);
//# sourceMappingURL=books.controller.js.map