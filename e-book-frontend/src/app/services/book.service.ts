import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Book} from "../model/book.model";
import {environment} from "../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient:HttpClient) { }

  getAllBook():Observable<Book[]>
  {
    return this.httpClient.get<Book[]>(environment.rootUrl+'api/book/getAllBook');
  }

  saveBook(book:Book):Observable<Book>
  {
    return this.httpClient.post<Book>(environment.rootUrl+'api/book/saveBook',book);
  }

  getBookById(id?:number):Observable<Book>
  {
    return this.httpClient.get<Book>(environment.rootUrl+'api/book/getBooksById/'+`${id}`);
  }

  updateBookById(book:Book):Observable<Book>
  {
    console.log("update book",book)
    return this.httpClient.put<Book>(environment.rootUrl+'api/book/updateById',book);
  }

  deleteBookById(id:number):Observable<void>
  {
    return this.httpClient.delete<void>(environment.rootUrl+`api/book/deleteById/${id}`);
  }
}
