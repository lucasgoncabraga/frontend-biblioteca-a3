import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private readonly apiUrl = 'http://localhost:8080/api/reservations';

  constructor() { }

  getReservations() {
    return axios.get(this.apiUrl);
  }

  addReservation(reservation: any) {
    return axios.post(`${this.apiUrl}/queue`, reservation);
  }

  nextReservation() {
    return axios.get(`${this.apiUrl}/queue/next`);
  }
}