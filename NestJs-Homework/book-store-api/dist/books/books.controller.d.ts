interface Book {
    id: number;
    title: string;
    author: string;
    price: number;
}
export declare class BooksController {
    private books;
    getAllBooks(minPrice?: number, author?: string): Book[];
    getBookById(id: string): Book;
    createBook(newBook: Omit<Book, 'id'>): {
        title: string;
        author: string;
        price: number;
        id: number;
    };
    updateBook(id: string, updateData: Omit<Book, 'id'>): Book;
    deleteBook(id: string): {
        message: string;
    };
}
export {};
