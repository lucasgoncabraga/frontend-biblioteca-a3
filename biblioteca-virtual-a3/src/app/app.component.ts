import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { BookFormComponent } from "./book-form/book-form.component";
import { BookListComponent } from "./book-list/book-list.component";
import { BookSearchComponent } from './book-search/book-search.component';
import { ReservationQueueComponent } from './reservation-queue/reservation-queue.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [BookFormComponent, BookListComponent, BookSearchComponent, ReservationQueueComponent]
})
export class AppComponent {
  title = 'a3ui';
}

bootstrapApplication(AppComponent);
