import { Component } from '@angular/core';
import {Users} from "../model/users.model";
import {LoginService} from "../services/login.service";

import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isLoading = false;
  unauthorized?: string;
  users = new Users();


  constructor(
    private loginService: LoginService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Initialization logic if needed
  }

  loginUser() {

    this.isLoading = true;
    this.loginService.loginDetails(this.users).subscribe(
      (data: any) => {
        console.log(data);

        if (data.status === 200) {


          window.sessionStorage.setItem('Authorization', data.headers.get('Authorization')!);
          this.users = <any>data.body;
          this.users.authStatus = 'AUTH';
          this.users.username='';
          this.users.password='';
          window.sessionStorage.setItem('userdetails', JSON.stringify(this.users));

          if (this.users.authStatus === 'AUTH') {
            this.router.navigate(['book-list']);
          }
        } else if (data.status === 401) {
          this.unauthorized = 'Email or password did not match';
        }
      },
      (error) => {
        this.unauthorized = 'An error occurred during login';
        console.error('Login Error:', error);
      }
    );
  }

}
