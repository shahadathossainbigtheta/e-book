import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment.development";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient, private router:Router) {}

  loginDetails(user: any): Observable<any> {

    console.log(user);
    window.sessionStorage.setItem('userdetails', JSON.stringify(user));

    return this.httpClient.get<any>(environment.rootUrl + 'user/login', { observe: 'response', withCredentials: true });
  }
}
