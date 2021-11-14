import { Injectable } from '@nestjs/common';
import { books } from '../db';
import { FindBookResponseDto, CreateBookDto, BookResponseDto, UpdateBookDto } from './dto/book.dto'
import { v4 as uuid } from 'uuid';

@Injectable()
export class BookService {

    private books= books;
    getBooks(): FindBookResponseDto[]{
        return this.books;
    }
    

    getBookById(bookId: string): FindBookResponseDto{
       return this.books.find((book) => {
           return book.id === bookId
       })
    }

    createBook(payload: CreateBookDto): FindBookResponseDto{
        let newbook= {
            id: uuid(),
            ...payload
        }
        this.books.push(newbook)

        return newbook;
    }

    updateBook(payload: UpdateBookDto, bookId: string) {
        let updatedBook : BookResponseDto;

        const updatedbookList= this.books.map((book) => {
            if(book.id === bookId){
                updatedBook= {
                    id : bookId,
                    ...payload
                }
                return updatedBook;
            }else return book
        });

        this.books= updatedbookList;

        return updatedBook;
    }
}
