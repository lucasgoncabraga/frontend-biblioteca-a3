import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class BookFormComponent {
  book = {
    title: '',
    author: '',
    genre: '',
    publicationYear: '',
    availableQuantity: ''
  };

  constructor(private readonly bookService: BookService) { }

  onSubmit() {
    this.bookService.createBook(this.book).then(response => {
      console.log(response.data);
    }).catch(error => {
      console.error('There was an error creating the book!', error);
    });
  }
}