import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly apiUrl = 'http://localhost:8080/api/users';

  constructor() { }

  getUsers() {
    return axios.get(this.apiUrl);
  }
  

  createUser(user: any) {
    return axios.post(this.apiUrl, user);
  }
}
