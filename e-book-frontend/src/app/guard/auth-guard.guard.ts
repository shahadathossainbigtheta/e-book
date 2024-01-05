import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from "rxjs";
import { Users } from "../model/users.model";

@Injectable({
  providedIn: 'root'
})
export class AuthRouteguardsGuard implements CanActivate {
  users?: Users;

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    if (typeof sessionStorage !== 'undefined' && sessionStorage.getItem('userdetails')) {
      this.users = JSON.parse(sessionStorage.getItem('userdetails')!);
    }

    if (!this.users) {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}
