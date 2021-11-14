import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ValidBookMiddleware } from 'src/common/middleware/validBook.middleware';
import { consumers } from 'stream';
import { BookController } from './book.controller';
import { BookService } from './book.service';

@Module({
    controllers: [BookController],
    providers: [BookService]
})
export class BookModule implements NestModule {
    configure(consumer: MiddlewareConsumer){
        consumer.apply(ValidBookMiddleware).forRoutes({
            path: 'books/:bookId',
            method: RequestMethod.GET
        });
        consumer.apply(ValidBookMiddleware).forRoutes({
            path: 'books/:bookId',
            method: RequestMethod.PUT
        });
    }
}
