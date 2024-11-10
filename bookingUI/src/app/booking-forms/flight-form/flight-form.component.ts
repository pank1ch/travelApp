import { Component } from '@angular/core';
import { BookingButtonComponent } from '../booking-button/booking-button.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-flight-form',
  standalone: true,
  imports: [BookingButtonComponent, FormsModule],
  templateUrl: './flight-form.component.html',
  styleUrl: './flight-form.component.scss'
})
export class FlightFormComponent {

  onSubmit(){
    alert('gol');
  }
}
