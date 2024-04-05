import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-math-and-science',
  templateUrl: './math-and-science.component.html',
  styleUrls: ['./math-and-science.component.scss']
})
export class MathAndScienceComponent {

  isBouncing_1: boolean = false;
  isBouncing_2: boolean = false;
  isBouncing_3: boolean = false;
  isBouncing_4: boolean = false;
  isZoomin: boolean = false;
  isLoaded: boolean = false;

  constructor(private router: Router) {}

  changeClass_1() {
    // Set isBouncing to true to apply the bounceOut class
    this.isBouncing_1 = true;

    // After changing the class, wait for the animation to complete before navigating
    setTimeout(() => {
      // Navigate to the specified route with input parameter
      this.router.navigate(['/worldLanguages_dm'], {
        queryParams: { selectedProject: 'English' },
      });
    }, 680);
  }

  changeClass_2() {
    // Set isBouncing to true to apply the bounceOut class
    this.isBouncing_2 = true;

    // After changing the class, wait for the animation to complete before navigating
    setTimeout(() => {
      // Navigate to the specified route
      this.router.navigate(['/worldLanguages_dm'], {
        queryParams: { selectedProject: 'Arabic' },
      });
    }, 680);
  }

  changeClass_3() {
    // Set isBouncing to true to apply the bounceOut class
   // this.isBouncing_3 = true;

    // // After changing the class, wait for the animation to complete before navigating
    // setTimeout(() => {
    //   // Navigate to the specified route with input parameter
    //   this.router.navigate(['/worldLanguages_dm'], {
    //     queryParams: { selectedProject: 'Chinese' },
    //   });
    // }, 680);
  }

  changeClass_4() {
    // Set isBouncing to true to apply the bounceOut class
    this.isBouncing_4 = true;

    // After changing the class, wait for the animation to complete before navigating
    setTimeout(() => {
      // Navigate to the specified route with input parameter
      this.router.navigate(['/worldLanguages_dm'], {
        queryParams: { selectedProject: 'French' },
      });
    }, 680);
  }


  navigateToLanguageReaders(){

    this.router.navigate(['/languageReaders']);
  }
  navigateToAccelerated(){

    this.router.navigate(['/accelerated-m']);
  }

  navigateToAce(){

    this.router.navigate(['/ace']);
  }
}
