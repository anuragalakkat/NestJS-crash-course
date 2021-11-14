import { CreateBookDto, UpdateBookDto, FindBookResponseDto, BookResponseDto } from './dto/book.dto';
import { BookService } from './book.service';
export declare class BookController {
    private readonly bookService;
    constructor(bookService: BookService);
    getBooks(): FindBookResponseDto[];
    getBookById(bookId: string): FindBookResponseDto;
    createBook(body: CreateBookDto): FindBookResponseDto;
    updateBook(bookId: string, body: UpdateBookDto): BookResponseDto;
}
