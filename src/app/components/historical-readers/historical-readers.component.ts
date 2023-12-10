import { Component } from '@angular/core';

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

  isBouncing_crazy: boolean = false;
  isZooming_crazy: boolean = false;
  isScaling_crazy: boolean = false;

  isBouncing_genghis: boolean = false;
  isZooming_genghis: boolean = false;
  isScaling_genghis: boolean = false;

  isBouncing_fransisco: boolean = false;
  isZooming_fransisco: boolean = false;
  isScaling_fransisco: boolean = false;

  isBouncing_hungwu: boolean = false;
  isZooming_hungwu: boolean = false;
  isScaling_hungwu: boolean = false;

  isBouncing_freedom: boolean = false;
  isZooming_freedom: boolean = false;
  isScaling_freedom: boolean = false;

  isBouncing_catherine: boolean = false;
  isZooming_catherine: boolean = false;
  isScaling_catherine: boolean = false;

  isBouncing_queen: boolean = false;
  isZooming_queen: boolean = false;
  isScaling_queen: boolean = false;

  ngOnInit(): void {
    this.crazy();

    setTimeout(() => {
      // Navigate to the specified route
      this.cabeza();
    }, 1000); // Adjust the timeout value based on your animation duration

    setTimeout(() => {
      // Navigate to the specified route
      this.hatchepsuit();
    }, 2000); // Adjust the timeout value based on your animation duration

    setTimeout(() => {
      // Navigate to the specified route
      this.genghis();
    }, 3000); // Adjust the timeout value based on your animation duration

    setTimeout(() => {
      // Navigate to the specified route
      this.fransisco();
    }, 4000); // Adjust the timeout value based on your animation duration

    setTimeout(() => {
      // Navigate to the specified route
      this.hungwu();
    }, 5000); // Adjust the timeout value based on your animation duration

    setTimeout(() => {
      // Navigate to the specified route
      this.freedom();
    }, 6000); // Adjust the timeout value based on your animation duration

    setTimeout(() => {
      // Navigate to the specified route
      this.catherine();
    }, 7000); // Adjust the timeout value based on your animation duration

    setTimeout(() => {
      // Navigate to the specified route
      this.queen();
    }, 8000); // Adjust the timeout value based on your animation duration
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

  crazy(): void {
    setTimeout(() => {
      // Navigate to the specified route
      this.isScaling_crazy = true;
    }, 600); // Adjust the timeout value based on your animation duration

    setTimeout(() => {
      // Navigate to the specified route
      this.isBouncing_crazy = true;
    }, 1600); // Adjust the timeout value based on your animation duration

    setTimeout(() => {
      // Navigate to the specified route
      this.isZooming_crazy = true;
    }, 2000); // Adjust the timeout value based on your animation duration
  }

  genghis(): void {
    setTimeout(() => {
      // Navigate to the specified route
      this.isScaling_genghis = true;
    }, 600); // Adjust the timeout value based on your animation duration

    setTimeout(() => {
      // Navigate to the specified route
      this.isBouncing_genghis = true;
    }, 1600); // Adjust the timeout value based on your animation duration

    setTimeout(() => {
      // Navigate to the specified route
      this.isZooming_genghis = true;
    }, 2000); // Adjust the timeout value based on your animation duration
  }

  fransisco(): void {
    setTimeout(() => {
      // Navigate to the specified route
      this.isScaling_fransisco = true;
    }, 600); // Adjust the timeout value based on your animation duration

    setTimeout(() => {
      // Navigate to the specified route
      this.isBouncing_fransisco = true;
    }, 1600); // Adjust the timeout value based on your animation duration

    setTimeout(() => {
      // Navigate to the specified route
      this.isZooming_fransisco = true;
    }, 2000); // Adjust the timeout value based on your animation duration
  }

  hungwu(): void {
    setTimeout(() => {
      // Navigate to the specified route
      this.isScaling_hungwu = true;
    }, 600); // Adjust the timeout value based on your animation duration

    setTimeout(() => {
      // Navigate to the specified route
      this.isBouncing_hungwu = true;
    }, 1600); // Adjust the timeout value based on your animation duration

    setTimeout(() => {
      // Navigate to the specified route
      this.isZooming_hungwu = true;
    }, 2000); // Adjust the timeout value based on your animation duration
  }

  freedom(): void {
    setTimeout(() => {
      // Navigate to the specified route
      this.isScaling_freedom = true;
    }, 600); // Adjust the timeout value based on your animation duration

    setTimeout(() => {
      // Navigate to the specified route
      this.isBouncing_freedom = true;
    }, 1600); // Adjust the timeout value based on your animation duration

    setTimeout(() => {
      // Navigate to the specified route
      this.isZooming_freedom = true;
    }, 2000); // Adjust the timeout value based on your animation duration
  }

  catherine(): void {
    setTimeout(() => {
      // Navigate to the specified route
      this.isScaling_catherine = true;
    }, 600); // Adjust the timeout value based on your animation duration

    setTimeout(() => {
      // Navigate to the specified route
      this.isBouncing_catherine = true;
    }, 1600); // Adjust the timeout value based on your animation duration

    setTimeout(() => {
      // Navigate to the specified route
      this.isZooming_catherine = true;
    }, 2000); // Adjust the timeout value based on your animation duration
  }

  queen(): void {
    setTimeout(() => {
      // Navigate to the specified route
      this.isScaling_queen = true;
    }, 600); // Adjust the timeout value based on your animation duration

    setTimeout(() => {
      // Navigate to the specified route
      this.isBouncing_queen = true;
    }, 1600); // Adjust the timeout value based on your animation duration

    setTimeout(() => {
      // Navigate to the specified route
      this.isZooming_queen = true;
    }, 2000); // Adjust the timeout value based on your animation duration
  }
}
