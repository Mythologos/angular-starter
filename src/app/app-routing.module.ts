import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'authors', loadChildren: './authors/authors.module#AuthorsModule' },
  { path: 'books', loadChildren: './books/books.module#BooksModule' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
