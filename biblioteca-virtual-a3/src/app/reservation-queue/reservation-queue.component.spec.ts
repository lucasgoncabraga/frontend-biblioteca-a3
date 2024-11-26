import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationQueueComponent } from './reservation-queue.component';

describe('ReservationQueueComponent', () => {
  let component: ReservationQueueComponent;
  let fixture: ComponentFixture<ReservationQueueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservationQueueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
