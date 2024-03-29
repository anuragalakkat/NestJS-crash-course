"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookModule = void 0;
const common_1 = require("@nestjs/common");
const validBook_middleware_1 = require("../common/middleware/validBook.middleware");
const book_controller_1 = require("./book.controller");
const book_service_1 = require("./book.service");
let BookModule = class BookModule {
    configure(consumer) {
        consumer.apply(validBook_middleware_1.ValidBookMiddleware).forRoutes({
            path: 'books/:bookId',
            method: common_1.RequestMethod.GET
        });
        consumer.apply(validBook_middleware_1.ValidBookMiddleware).forRoutes({
            path: 'books/:bookId',
            method: common_1.RequestMethod.PUT
        });
    }
};
BookModule = __decorate([
    (0, common_1.Module)({
        controllers: [book_controller_1.BookController],
        providers: [book_service_1.BookService]
    })
], BookModule);
exports.BookModule = BookModule;
//# sourceMappingURL=book.module.js.map