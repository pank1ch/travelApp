import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from "../shared/footer/footer.component";
import { FlightFormComponent } from '../booking-forms/flight-form/flight-form.component';
import { FormWrapperComponent } from '../shared/form-wrapper/form-wrapper.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, FlightFormComponent, FormWrapperComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements AfterViewInit {

  private navBarLength!: number;
  private menuItemsDistance: number = 40;
  private animationFrameId?: number;
  private initialStepsCount!: number;
  private isAnimating: boolean = false;

  ngAfterViewInit(): void {
    this.navBarLength = this.navBar.nativeElement.offsetWidth;
    this.initialStepsCount = this.navBarLength + this.menuItemsDistance;
  }

  private activeFormType: 'flights' | 'hotels' = 'flights'
  private isEndOfFormsList: boolean = false;

  leftCoordinates: number = 4;

  @ViewChild('navBar') navBar!: ElementRef<HTMLDivElement>;

  onBookingFormSelect(formType: 'flights' | 'hotels'): void {

    if (this.isAnimating) {
      return;
    }

    if (formType === this.activeFormType){
      return;
    }
    this.activeFormType = formType;
    this.startNavBarMoving();
  }

  private startNavBarMoving(): void {

    this.isAnimating = true;
    let currentStepsCount = this.initialStepsCount;


    const step = this.isEndOfFormsList ? -3 : 3;

    this.animateToTarget(step, currentStepsCount);
  }

  animateToTarget(step: number, currentSteps: number): void {

    if (currentSteps > 0 ) {
      this.leftCoordinates += step;

      currentSteps-=3;
      this.animationFrameId = requestAnimationFrame(() => this.animateToTarget(step, currentSteps));
    }
    else{
      if (!this.isEndOfFormsList){
        this.isEndOfFormsList = true;
      }
      else{
        this.isEndOfFormsList = false;
      }

      this.isAnimating = false;

    }
  }




}
