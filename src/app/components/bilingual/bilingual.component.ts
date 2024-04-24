import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bilingual',
  templateUrl: './bilingual.component.html',
  styleUrls: ['./bilingual.component.scss'],
})
export class BilingualComponent {
  isBouncing_1: boolean = false;
  isBouncing_2: boolean = false;
  isBouncing_3: boolean = false;
  isBouncing_4: boolean = false;
  isBouncing_5: boolean = false;
  isBouncing_6: boolean = false;
  isBouncing_7: boolean = false;
  isBouncing_8: boolean = false;
  isBouncing_9: boolean = false;
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
    this.isBouncing_3 = true;
    // After changing the class, wait for the animation to complete before navigating
    setTimeout(() => {
      // Navigate to the specified route with input parameter
      this.router.navigate(['/chinese']);
    }, 680);
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

  changeClass_5() {
    // Set isBouncing to true to apply the bounceOut class
    this.isBouncing_5 = true;

    // After changing the class, wait for the animation to complete before navigating
    setTimeout(() => {
      // Navigate to the specified route with input parameter
      this.router.navigate(['/worldLanguages_dm'], {
        queryParams: { selectedProject: 'Kurdish' },
      });
    }, 680);
  }

  changeClass_6() {
    // Set isBouncing to true to apply the bounceOut class
    this.isBouncing_6 = true;

    // After changing the class, wait for the animation to complete before navigating
    setTimeout(() => {
      // Navigate to the specified route with input parameter
      this.router.navigate(['/worldLanguages_dm'], {
        queryParams: { selectedProject: 'Portuguese' },
      });
    }, 680);
  }

  changeClass_7() {
    // Set isBouncing to true to apply the bounceOut class
    this.isBouncing_7 = true;

    // After changing the class, wait for the animation to complete before navigating
    setTimeout(() => {
      // Navigate to the specified route with input parameter
      this.router.navigate(['/worldLanguages_dm'], {
        queryParams: { selectedProject: 'Spanish' },
      });
    }, 680);
  }

  changeClass_8() {
    // Set isBouncing to true to apply the bounceOut class
    this.isBouncing_8 = true;

    // After changing the class, wait for the animation to complete before navigating
    setTimeout(() => {
      // Navigate to the specified route with input parameter
      this.router.navigate(['/bilingual'], {
        queryParams: {
          selectedProject: 'Russian',
          isMath: 'false',
        },
      });
    }, 680);
  }

  changeClass_9() {
      // Set isBouncing to true to apply the bounceOut class
      this.isBouncing_9 = true;

      // After changing the class, wait for the animation to complete before navigating
      setTimeout(() => {
        // Navigate to the specified route with input parameter
        this.router.navigate(['/bilingual'], {
          queryParams: {
            selectedProject: 'Korean',
            isMath: 'false',
          },
        });
      }, 680);
  }

  navigateToLanguageReaders() {
    this.router.navigate(['/languageReaders']);
  }
  navigateToAccelerated() {
    this.router.navigate(['/accelerated']);
  }

  navigateToEnglishForAdults() {
    this.router.navigate(['/englishForAdults']);
  }
}
