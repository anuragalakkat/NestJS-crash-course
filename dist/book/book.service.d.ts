import { FindBookResponseDto, CreateBookDto, BookResponseDto, UpdateBookDto } from './dto/book.dto';
export declare class BookService {
    private books;
    getBooks(): FindBookResponseDto[];
    getBookById(bookId: string): FindBookResponseDto;
    createBook(payload: CreateBookDto): FindBookResponseDto;
    updateBook(payload: UpdateBookDto, bookId: string): BookResponseDto;
}
