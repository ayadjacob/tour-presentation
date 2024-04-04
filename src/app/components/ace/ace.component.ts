import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ace',
  templateUrl: './ace.component.html',
  styleUrls: ['./ace.component.scss'],
})
export class AceComponent {
  isBouncingOut_1 = false;
  isBouncingOut_2 = false;
  isBouncingOut_3 = false;
  isBouncingOut_4 = false;
  isBouncingOut_5 = false;
  isBouncingOut_6 = false;
  isBouncingOut_7 = false;

  constructor(private router: Router) {}

  changeClass_1() {
    // Set isBouncing to true to apply the bounceOut class
    this.isBouncingOut_1 = true;

    // After changing the class, wait for the animation to complete before navigating
    setTimeout(() => {
      // Navigate to the specified route
      this.router.navigate(['/flip'], {
        queryParams: {
          flipProjectUrl:
            'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
          withThumbnails: 'false',
          backButtonPath: '/historical',
        },
      });
    }, 680); // Adjust the timeout value based on your animation duration
  }

  changeClass_2() {
    // Set isBouncing to true to apply the bounceOut class
    this.isBouncingOut_2 = true;

    // After changing the class, wait for the animation to complete before navigating
    setTimeout(() => {
      // Navigate to the specified route
      this.router.navigate(['/flip'], {
        queryParams: {
          flipProjectUrl:
            'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
          withThumbnails: 'false',
          backButtonPath: '/historical',
        },
      });
    }, 680); // Adjust the timeout value based on your animation duration
  }

  changeClass_3() {
    // Set isBouncing to true to apply the bounceOut class
    this.isBouncingOut_3 = true;

    // After changing the class, wait for the animation to complete before navigating
    setTimeout(() => {
      // Navigate to the specified route
      this.router.navigate(['/flip'], {
        queryParams: {
          flipProjectUrl:
            'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
          withThumbnails: 'false',
          backButtonPath: '/historical',
        },
      });
    }, 680); // Adjust the timeout value based on your animation duration
  }

  changeClass_4() {
    // Set isBouncing to true to apply the bounceOut class
    this.isBouncingOut_4 = true;

    // After changing the class, wait for the animation to complete before navigating
    setTimeout(() => {
      // Navigate to the specified route
      this.router.navigate(['/flip'], {
        queryParams: {
          flipProjectUrl:
            'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
          withThumbnails: 'false',
          backButtonPath: '/historical',
        },
      });
    }, 680); // Adjust the timeout value based on your animation duration
  }

  changeClass_5() {
    // Set isBouncing to true to apply the bounceOut class
    this.isBouncingOut_5 = true;

    // After changing the class, wait for the animation to complete before navigating
    setTimeout(() => {
      // Navigate to the specified route
      this.router.navigate(['/flip'], {
        queryParams: {
          flipProjectUrl:
            'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
          withThumbnails: 'false',
          backButtonPath: '/historical',
        },
      });
    }, 680); // Adjust the timeout value based on your animation duration
  }

  changeClass_6() {
    // Set isBouncing to true to apply the bounceOut class
    this.isBouncingOut_6 = true;

    // After changing the class, wait for the animation to complete before navigating
    setTimeout(() => {
      // Navigate to the specified route
      this.router.navigate(['/flip'], {
        queryParams: {
          flipProjectUrl:
            'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
          withThumbnails: 'false',
          backButtonPath: '/historical',
        },
      });
    }, 680); // Adjust the timeout value based on your animation duration
  }

  changeClass_7() {
    // Set isBouncing to true to apply the bounceOut class
    this.isBouncingOut_7 = true;

    // After changing the class, wait for the animation to complete before navigating
    setTimeout(() => {
      // Navigate to the specified route
      this.router.navigate(['/flip'], {
        queryParams: {
          flipProjectUrl:
            'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
          withThumbnails: 'false',
          backButtonPath: '/historical',
        },
      });
    }, 680); // Adjust the timeout value based on your animation duration
  }
}
