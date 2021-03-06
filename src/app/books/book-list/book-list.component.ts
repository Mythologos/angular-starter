import { Component, OnInit } from '@angular/core';
import { BookService, Book } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getAll().subscribe(
      (bookData: Book[]) => this.books = bookData
    );
  }
}
