import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class BookSearchComponent implements OnInit {
  searchTitle = '';
  searchResult: any = {};

  constructor(private readonly bookService: BookService) { }

  ngOnInit(): void { /* TODO document why this method 'ngOnInit' is empty */  }

  handleSearch() {
    this.bookService.searchBook(this.searchTitle).then(response => {
      this.searchResult = response.data;
    }).catch(error => {
      console.error('There was an error searching the book!', error);
    });
  }
}
