import { Injectable, NestMiddleware, HttpException } from "@nestjs/common";
import {Request, Response, NextFunction} from "express"
import {books} from '../../db'

@Injectable()
export class ValidBookMiddleware implements NestMiddleware
{
     use(req: Request, res: Response, next: NextFunction){
         console.log("was called")
     const bookId= req.params.bookId;
     const bookExists= books.some(book => {
         return book.id === bookId
     });

     if(!bookExists){
         throw new HttpException("Not foound", 400)
     }
     next()
     }
}