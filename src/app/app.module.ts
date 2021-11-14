import { Module } from '@nestjs/common';
import {BookModule} from 'src/book/book.module'

@Module({
  imports: [BookModule],
})
export class AppModule {}
