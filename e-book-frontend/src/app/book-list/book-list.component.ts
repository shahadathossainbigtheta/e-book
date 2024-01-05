import {Component, OnInit} from '@angular/core';
import {Book} from "../model/book.model";
import {Users} from "../model/users.model";
import {BookService} from "../services/book.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit{

  bookList?:Book[];

  users?:Users;



  constructor(private bookService:BookService, private route:Router) {
    // if (typeof sessionStorage !== 'undefined' && sessionStorage.getItem('userdetails')) {
    //   this.users = JSON.parse(sessionStorage.getItem('userdetails')!);
    // }
    // this.getAllBook()
  }


  ngOnInit(): void {
    this.getAllBook()
    if (typeof sessionStorage !== 'undefined' && sessionStorage.getItem('userdetails')) {
      this.users = JSON.parse(sessionStorage.getItem('userdetails')!);
    }
  }


  getAllBook()
  {
    this.bookService.getAllBook().subscribe(data=>{
      console.log(data)
      this.bookList=data;
    })
  }

  deleteById(id: any): void {
    this.bookService.deleteBookById(id).subscribe(()=>{
      this.getAllBook();
    })

  }
  logout()
  {
    window.sessionStorage.removeItem("userdetails");
    window.sessionStorage.removeItem("XSRF-TOKEN");
    window.sessionStorage.removeItem("Authorization");
    this.route.navigate(['login'])
  }
}

