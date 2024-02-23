import { CommonModule } from '@angular/common';
import { Component, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'language-readers',
  templateUrl: './language-readers.component.html',
  styleUrls: ['./language-readers.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, RouterOutlet],
})
export class LanguageReadersComponent {
  [x: string]: any;

  @Input() covers: { id: number; src: string; filpProjectUrl: string }[] = [];
  @Input() leftImagePath: string = '';
  @Input() arrowImagePath: string = '';
  @Input() dotBackgroundColor: string = '';
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

// translateToLeft() {
//   this.selectedCoverId -= 1;

//   if (this.slidesCounterLeft == 0) {
//     console.log('Left condition reached');
//     this.slidesCounterRight = 11;
//     this.slidesCounterLeft = -11;
//     this.totalTranslation += 1548;
//     this.moveSlider();
//   } else {
//     this.slidesCounterLeft += 1;
//     this.slidesCounterRight -= 1;
//   }
// }

// translateToRight() {
//   this.selectedCoverId += 1;
//   this.slidesCounterLeft -= 1;
//   this.slidesCounterRight += 1;

//   if (this.slidesCounterRight == 12) {
//     this.slidesCounterRight = 0;
//     this.slidesCounterLeft = 0;
//     this.totalTranslation -= 1548;
//     this.moveSlider();
//   }
//   else  if (this.slidesCounterRight == 13) {
//     this.slidesCounterRight = 0;
//     this.slidesCounterLeft = 0;
//     this.totalTranslation -= 1548;
//     this.moveSlider();
//   }
// }

// private moveSlider() {
//   const slider = this.el.nativeElement.querySelector('.covers-holder');
//   this.renderer.setStyle(
//     slider,
//     'transform',
//     `translateX(${this.totalTranslation}px)`
//   );
//   this.renderer.setStyle(slider, 'transition', 'transform 500ms');
// }
