import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-reservation-queue',
  templateUrl: './reservation-queue.component.html',
  styleUrls: ['./reservation-queue.component.css'],
  standalone: true
})
export class ReservationQueueComponent implements OnInit {
  reservations = [];
  nextReservation: any = {};

  constructor(private readonly reservationService: ReservationService) { }

  ngOnInit(): void {
    this.reservationService.getReservations().then(response => {
      this.reservations = response.data;
    }).catch(error => {
      console.error('There was an error fetching the reservations!', error);
    });
  }

  handleNextReservation() {
    this.reservationService.nextReservation().then(response => {
      this.nextReservation = response.data;
    }).catch(error => {
      console.error('There was an error getting the next reservation!', error);
    });
  }
}
