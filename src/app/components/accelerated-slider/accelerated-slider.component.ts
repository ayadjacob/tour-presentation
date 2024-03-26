import { CommonModule } from '@angular/common';
import { Component, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'accelerated-slider',
  templateUrl: './accelerated-slider.component.html',
  styleUrls: ['./accelerated-slider.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, RouterOutlet],
})
export class AcceleratedSliderComponent {
  [x: string]: any;

  @Input() covers: { id: number; src: string; filpProjectUrl: string }[] = [];
  @Input() leftImagePath: string = '';
  @Input() arrowImagePath: string = '';
  @Input() dotBackgroundColor: string = '';
  @Input() word:string = "English";
  isBouncingOut_: boolean[] = [false, false, false];

  // selectedCoverId: number = 1;
  // slidesCounterRight: number = 0;
  // slidesCounterLeft: number = 0;
  // totalTranslation: number = 0;

  constructor(private router: Router) {}

  changeClass(i: number, projectUrl: string) {
    if (projectUrl !== '#') {
      this['isBouncingOut_'][i] = true;
      console.log("this['isBouncingOut_'][i]", this['isBouncingOut_'][i]);

      // After changing the class, wait for the animation to complete before navigating
      setTimeout(() => {
        // Navigate to the specified route
        this.router.navigate(['/flip'], {
          queryParams: {
            flipProjectUrl: projectUrl,
            withThumbnails: 'false', // or 'false' depending on your requirement
            backButtonPath: '/languageReaders',
          },
        });
      }, 600); // Adjust the timeout value based on your animation duration
    }
  }
}
