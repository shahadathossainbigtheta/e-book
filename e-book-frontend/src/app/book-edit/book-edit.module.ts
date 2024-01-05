import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookEditRoutingModule } from './book-edit-routing.module';
import { BookEditComponent } from './book-edit.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    BookEditComponent
  ],
    imports: [
        CommonModule,
        BookEditRoutingModule,
        FormsModule
    ]
})
export class BookEditModule { }
