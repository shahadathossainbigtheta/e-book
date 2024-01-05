import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthRouteguardsGuard} from "./guard/auth-guard.guard";

const routes: Routes = [{ path: 'book-list', canActivate: [AuthRouteguardsGuard], loadChildren: () => import('./book-list/book-list.module').then(m => m.BookListModule) }, { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }, { path: 'book-details', canActivate: [AuthRouteguardsGuard], loadChildren: () => import('./book-details/book-details.module').then(m => m.BookDetailsModule) }, { path: 'book-edit', canActivate: [AuthRouteguardsGuard], loadChildren: () => import('./book-edit/book-edit.module').then(m => m.BookEditModule) },
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  { path: 'add-book', canActivate: [AuthRouteguardsGuard], loadChildren: () => import('./add-book/add-book.module').then(m => m.AddBookModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
