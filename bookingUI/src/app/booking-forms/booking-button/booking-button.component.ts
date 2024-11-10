import { Component, Input } from '@angular/core';

@Component({
  selector: 'search-booking-button',
  standalone: true,
  imports: [],
  templateUrl: './booking-button.component.html',
  styleUrl: './booking-button.component.scss'
})
export class BookingButtonComponent {

  @Input({required: true}) title!: string;
  @Input({required: true}) type!: 'flights' | 'hotels';
}
