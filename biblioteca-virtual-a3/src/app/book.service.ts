import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private readonly apiUrl = 'http://localhost:8080/api/books';

  constructor() { }

  getBooks(){
    return axios.get(this.apiUrl);
  }

  createBook(book: any){
    return axios.post(this.apiUrl, book);
  }

  searchBook(title: string) {
    return axios.get(`${this.apiUrl}/search`, { params: { title }});
  }
}