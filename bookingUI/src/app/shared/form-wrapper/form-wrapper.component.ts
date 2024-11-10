import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-wrapper',
  standalone: true,
  imports: [],
  templateUrl: './form-wrapper.component.html',
  styleUrl: './form-wrapper.component.scss'
})
export class FormWrapperComponent {

  @Input({required: true}) location!: 'landingPage' | 'flights' | 'hotels';
}
