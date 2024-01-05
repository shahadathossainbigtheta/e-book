import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Users } from '../model/users.model';
import { Router } from '@angular/router';

@Injectable()
export class AppInterceptorInterceptor implements HttpInterceptor {

  users = new Users();

  constructor(private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let httpHeaders = new HttpHeaders();

    // Check if we are in the browser environment before accessing sessionStorage
    if (typeof window !== 'undefined' && typeof sessionStorage !== 'undefined' && sessionStorage.getItem('userdetails')) {
      this.users = JSON.parse(sessionStorage.getItem('userdetails')!);
    }

    if (this.users && this.users.username && this.users.password) {
      httpHeaders = httpHeaders.append('Authorization', 'Basic ' + window.btoa(this.users.username + ':' + this.users.password));
    } else {
      let authorization = sessionStorage.getItem('Authorization');
      if (authorization) {
        httpHeaders = httpHeaders.append('Authorization', authorization);
      }
    }

    httpHeaders = httpHeaders.append('X-Requested-With', 'XMLHttpRequest');

    const xhr = request.clone({
      headers: httpHeaders
    });

    return next.handle(xhr).pipe(
      tap(
        (event: any) => {},
        (err: any) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status !== 401) {
              return;
            }

            this.router.navigate(['login']);
          }
        }
      )
    );
  }
}
