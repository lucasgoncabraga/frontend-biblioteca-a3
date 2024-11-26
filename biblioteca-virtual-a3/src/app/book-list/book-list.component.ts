import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  standalone: true
})
export class BookListComponent implements OnInit {
  books = [];

  constructor(private readonly bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getBooks().then(response => {
      this.books = response.data;
    }).catch(error => {
      console.error('There was an error fetching the books!', error);
    });
  }
}