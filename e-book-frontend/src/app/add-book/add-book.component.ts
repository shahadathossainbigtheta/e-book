import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {BookService} from "../services/book.service";
import {Book} from "../model/book.model";

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {
  newBook=new Book();

  constructor(private bookService:BookService, private route:Router) {
  }

  saveBook()
  {
    this.bookService.saveBook(this.newBook).subscribe(data=>{
      console.log(data);
      this.route.navigate(['book-list']);
    })
  }
}
