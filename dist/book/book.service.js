"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const common_1 = require("@nestjs/common");
const db_1 = require("../db");
const uuid_1 = require("uuid");
let BookService = class BookService {
    constructor() {
        this.books = db_1.books;
    }
    getBooks() {
        return this.books;
    }
    getBookById(bookId) {
        return this.books.find((book) => {
            return book.id === bookId;
        });
    }
    createBook(payload) {
        let newbook = Object.assign({ id: (0, uuid_1.v4)() }, payload);
        this.books.push(newbook);
        return newbook;
    }
    updateBook(payload, bookId) {
        let updatedBook;
        const updatedbookList = this.books.map((book) => {
            if (book.id === bookId) {
                updatedBook = Object.assign({ id: bookId }, payload);
                return updatedBook;
            }
            else
                return book;
        });
        this.books = updatedbookList;
        return updatedBook;
    }
};
BookService = __decorate([
    (0, common_1.Injectable)()
], BookService);
exports.BookService = BookService;
//# sourceMappingURL=book.service.js.map