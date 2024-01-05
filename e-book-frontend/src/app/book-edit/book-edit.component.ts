import { Component } from '@angular/core';
import { Book } from '../model/book.model';
import {BookService} from "../services/book.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrl: './book-edit.component.css'
})
export class BookEditComponent {

  bookId?:number;
  book=new Book();
  constructor(private bookService:BookService, private activatedRoute:ActivatedRoute, private route:Router) {
    this.activatedRoute.params.subscribe(parm=>{
      this.bookId=parm['id'];
    })
    this.getBookById();
  }

  getBookById():void
  {
    this.bookService.getBookById(this.bookId).subscribe(data=>{
      this.book=data;
    })
  }

  updateById():void{
    this.bookService.updateBookById(this.book).subscribe(data=>{
      console.log(data);
      this.route.navigate(['book-list']);
    })
  }

}
