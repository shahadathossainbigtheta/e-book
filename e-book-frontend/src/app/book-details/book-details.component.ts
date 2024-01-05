import { Component } from '@angular/core';
import {Book} from "../model/book.model";
import {ActivatedRoute} from "@angular/router";
import {BookService} from "../services/book.service";

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent {
  bookId?:number;
  book?:Book;
  constructor(private activatedRoute:ActivatedRoute, private bookService:BookService) {
    this.activatedRoute.params.subscribe(param=>{
      this.bookId=param['id'];
    })
    this.getProductId();
  }

  getProductId():void
  {
    this.bookService.getBookById(this.bookId).subscribe(data=>{
      this.book=data;
    })
  }

}
