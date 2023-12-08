import {
  Component,
  ElementRef,
  HostListener,
  Renderer2,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-historical-readers',
  templateUrl: './historical-readers.component.html',
  styleUrls: ['./historical-readers.component.scss'],
})
export class HistoricalReadersComponent {
  isBouncing_cabeza: boolean = false;
  isZooming_cabeza: boolean = false;
  isScaling_cabeza: boolean = false;

  isBouncing_hatchepsuit: boolean = false;
  isZooming_hatchepsuit: boolean = false;
  isScaling_hatchepsuit: boolean = false;

  ngOnInit(): void {
    this.cabeza();

    setTimeout(() => {
      // Navigate to the specified route
      this.hatchepsuit();
    }, 1000); // Adjust the timeout value based on your animation duration
  }

  cabeza(): void {
    setTimeout(() => {
      // Navigate to the specified route
      this.isScaling_cabeza = true;
    }, 600); // Adjust the timeout value based on your animation duration

    setTimeout(() => {
      // Navigate to the specified route
      this.isBouncing_cabeza = true;
    }, 1600); // Adjust the timeout value based on your animation duration

    setTimeout(() => {
      // Navigate to the specified route
      this.isZooming_cabeza = true;
    }, 2000); // Adjust the timeout value based on your animation duration
  }

  hatchepsuit(): void {
    setTimeout(() => {
      // Navigate to the specified route
      this.isScaling_hatchepsuit = true;
    }, 600); // Adjust the timeout value based on your animation duration

    setTimeout(() => {
      // Navigate to the specified route
      this.isBouncing_hatchepsuit = true;
    }, 1600); // Adjust the timeout value based on your animation duration

    setTimeout(() => {
      // Navigate to the specified route
      this.isZooming_hatchepsuit = true;
    }, 2000); // Adjust the timeout value based on your animation duration
  }
}
