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
exports.BookController = void 0;
const common_1 = require("@nestjs/common");
const book_dto_1 = require("./dto/book.dto");
const book_service_1 = require("./book.service");
let BookController = class BookController {
    constructor(bookService) {
        this.bookService = bookService;
    }
    getBooks() {
        return this.bookService.getBooks();
    }
    getBookById(bookId) {
        return this.bookService.getBookById(bookId);
    }
    createBook(body) {
        return this.bookService.createBook(body);
    }
    updateBook(bookId, body) {
        return this.bookService.updateBook(body, bookId);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], BookController.prototype, "getBooks", null);
__decorate([
    (0, common_1.Get)('/:bookId'),
    __param(0, (0, common_1.Param)('bookId', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", book_dto_1.FindBookResponseDto)
], BookController.prototype, "getBookById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [book_dto_1.CreateBookDto]),
    __metadata("design:returntype", book_dto_1.FindBookResponseDto)
], BookController.prototype, "createBook", null);
__decorate([
    (0, common_1.Put)('/:bookId'),
    __param(0, (0, common_1.Param)('bookId', new common_1.ParseUUIDPipe())),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, book_dto_1.UpdateBookDto]),
    __metadata("design:returntype", book_dto_1.BookResponseDto)
], BookController.prototype, "updateBook", null);
BookController = __decorate([
    (0, common_1.Controller)('books'),
    __metadata("design:paramtypes", [book_service_1.BookService])
], BookController);
exports.BookController = BookController;
//# sourceMappingURL=book.controller.js.map