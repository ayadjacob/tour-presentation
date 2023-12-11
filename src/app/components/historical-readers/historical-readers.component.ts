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

  isBouncing_thehawk: boolean = false;
  isZooming_thehawk: boolean = false;
  isScaling_thehawk: boolean = false;

  isBouncing_american: boolean = false;
  isZooming_american: boolean = false;
  isScaling_american: boolean = false;

  isBouncing_hamurabi: boolean = false;
  isZooming_hamurabi: boolean = false;
  isScaling_hamurabi: boolean = false;

  
  isBouncing_peter: boolean = false;
  isZooming_peter: boolean = false;
  isScaling_peter: boolean = false;

  isBouncing_thomas: boolean = false;
  isZooming_thomas: boolean = false;
  isScaling_thomas: boolean = false;


  isBouncing_shaka: boolean = false;
  isZooming_shaka: boolean = false;
  isScaling_shaka: boolean = false;

  isBouncing_alexander: boolean = false;
  isZooming_alexander: boolean = false;
  isScaling_alexander: boolean = false;

  isBouncing_tuskegee: boolean = false;
  isZooming_tuskegee: boolean = false;
  isScaling_tuskegee: boolean = false;

  ngOnInit(): void {
    this.crazy();

    setTimeout(() => {
      // Navigate to the specified route
      this.cabeza();
    }, 1000); // Adjust the timeout value based on your animation duration

    setTimeout(() => {
      // Navigate to the specified route
      this.hatchepsuit();
    }, 1250); // Adjust the timeout value based on your animation duration

    setTimeout(() => {
      // Navigate to the specified route
      this.genghis();
    }, 1500); // Adjust the timeout value based on your animation duration

    setTimeout(() => {
      // Navigate to the specified route
      this.fransisco();
    }, 1750); // Adjust the timeout value based on your animation duration

    setTimeout(() => {
      // Navigate to the specified route
      this.hungwu();
    }, 2000); // Adjust the timeout value based on your animation duration

    setTimeout(() => {
      // Navigate to the specified route
      this.freedom();
    }, 2250); // Adjust the timeout value based on your animation duration

    setTimeout(() => {
      // Navigate to the specified route
      this.catherine();
    }, 2500); // Adjust the timeout value based on your animation duration

    setTimeout(() => {
      // Navigate to the specified route
      this.queen();
    }, 2750); // Adjust the timeout value based on your animation duration

    setTimeout(() => {
      // Navigate to the specified route
      this.thehawk();
    }, 3000); // Adjust the timeout value based on your animation duration

    setTimeout(() => {
      // Navigate to the specified route
      this.american();
    }, 3250); // Adjust the timeout value based on your animation duration

    setTimeout(() => {
      // Navigate to the specified route
      this.hamurabi();
    }, 3500); // Adjust the timeout value based on your animation duration

    setTimeout(() => {
      // Navigate to the specified route
      this.peter();
    }, 3750); // Adjust the timeout value based on your animation duration

    setTimeout(() => {
      // Navigate to the specified route
      this.thomas();
    }, 4000); // Adjust the timeout value based on your animation duration

    setTimeout(() => {
      // Navigate to the specified route
      this.shaka();
    }, 4250); // Adjust the timeout value based on your animation duration

    setTimeout(() => {
      // Navigate to the specified route
      this.alexander();
    }, 4500); // Adjust the timeout value based on your animation duration

    setTimeout(() => {
      // Navigate to the specified route
      this.tuskegee();
    }, 4750); // Adjust the timeout value based on your animation duration
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

  thehawk(): void {
    setTimeout(() => {
      // Navigate to the specified route
      this.isScaling_thehawk = true;
    }, 600); // Adjust the timeout value based on your animation duration

    setTimeout(() => {
      // Navigate to the specified route
      this.isBouncing_thehawk = true;
    }, 1600); // Adjust the timeout value based on your animation duration

    setTimeout(() => {
      // Navigate to the specified route
      this.isZooming_thehawk = true;
    }, 2000); // Adjust the timeout value based on your animation duration
  }

  american(): void {
    setTimeout(() => {
      // Navigate to the specified route
      this.isScaling_american = true;
    }, 600); // Adjust the timeout value based on your animation duration

    setTimeout(() => {
      // Navigate to the specified route
      this.isBouncing_american = true;
    }, 1600); // Adjust the timeout value based on your animation duration

    setTimeout(() => {
      // Navigate to the specified route
      this.isZooming_american = true;
    }, 2000); // Adjust the timeout value based on your animation duration
  }

  hamurabi(): void {
    setTimeout(() => {
      // Navigate to the specified route
      this.isScaling_hamurabi = true;
    }, 600); // Adjust the timeout value based on your animation duration

    setTimeout(() => {
      // Navigate to the specified route
      this.isBouncing_hamurabi = true;
    }, 1600); // Adjust the timeout value based on your animation duration

    setTimeout(() => {
      // Navigate to the specified route
      this.isZooming_hamurabi = true;
    }, 2000); // Adjust the timeout value based on your animation duration
  }

  peter(): void {
    setTimeout(() => {
      // Navigate to the specified route
      this.isScaling_peter = true;
    }, 600); // Adjust the timeout value based on your animation duration

    setTimeout(() => {
      // Navigate to the specified route
      this.isBouncing_peter = true;
    }, 1600); // Adjust the timeout value based on your animation duration

    setTimeout(() => {
      // Navigate to the specified route
      this.isZooming_peter = true;
    }, 2000); // Adjust the timeout value based on your animation duration
  }

  thomas(): void {
    setTimeout(() => {
      // Navigate to the specified route
      this.isScaling_thomas = true;
    }, 600); // Adjust the timeout value based on your animation duration

    setTimeout(() => {
      // Navigate to the specified route
      this.isBouncing_thomas = true;
    }, 1600); // Adjust the timeout value based on your animation duration

    setTimeout(() => {
      // Navigate to the specified route
      this.isZooming_thomas = true;
    }, 2000); // Adjust the timeout value based on your animation duration
  }

  shaka(): void {
    setTimeout(() => {
      // Navigate to the specified route
      this.isScaling_shaka = true;
    }, 600); // Adjust the timeout value based on your animation duration

    setTimeout(() => {
      // Navigate to the specified route
      this.isBouncing_shaka = true;
    }, 1600); // Adjust the timeout value based on your animation duration

    setTimeout(() => {
      // Navigate to the specified route
      this.isZooming_shaka = true;
    }, 2000); // Adjust the timeout value based on your animation duration
  }

  alexander(): void {
    setTimeout(() => {
      // Navigate to the specified route
      this.isScaling_alexander = true;
    }, 600); // Adjust the timeout value based on your animation duration

    setTimeout(() => {
      // Navigate to the specified route
      this.isBouncing_alexander = true;
    }, 1600); // Adjust the timeout value based on your animation duration

    setTimeout(() => {
      // Navigate to the specified route
      this.isZooming_alexander = true;
    }, 2000); // Adjust the timeout value based on your animation duration
  }

  tuskegee(): void {
    setTimeout(() => {
      // Navigate to the specified route
      this.isScaling_tuskegee = true;
    }, 600); // Adjust the timeout value based on your animation duration

    setTimeout(() => {
      // Navigate to the specified route
      this.isBouncing_tuskegee = true;
    }, 1600); // Adjust the timeout value based on your animation duration

    setTimeout(() => {
      // Navigate to the specified route
      this.isZooming_tuskegee = true;
    }, 2000); // Adjust the timeout value based on your animation duration
  }
}
