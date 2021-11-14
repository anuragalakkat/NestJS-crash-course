import { Controller, Get, Post, Put, Param, Body, ParseUUIDPipe } from '@nestjs/common'
import { CreateBookDto, UpdateBookDto, FindBookResponseDto, BookResponseDto } from './dto/book.dto'
import { BookService } from './book.service'

@Controller('books')
export class BookController{

    constructor(private readonly bookService: BookService){}

    @Get()    
    getBooks():FindBookResponseDto[]{
        return this.bookService.getBooks()
    }

    @Get('/:bookId') 
    getBookById(
        @Param('bookId', new ParseUUIDPipe()) bookId : string
    ): FindBookResponseDto{
    return this.bookService.getBookById(bookId);
    }
   
    @Post()
    createBook(
        @Body() body: CreateBookDto
    ): FindBookResponseDto{
        return this.bookService.createBook(body)
    }

    @Put('/:bookId')
    updateBook(
        @Param('bookId', new ParseUUIDPipe()) bookId : string,
        @Body() body: UpdateBookDto
    ): BookResponseDto{
        return this.bookService.updateBook(body, bookId)
    }

}