import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'language-readers',
  templateUrl: './language-readers.component.html',
  styleUrls: ['./language-readers.component.scss'],
})
export class LanguageReadersComponent {
  slideId: string = '0';
  selectedCoverId: number = 1;
  slidesCounter: number = 0;
  slidesCountMngr: number = 0;
  totalTranslation: number = 0;

  covers: { id: number; src: string }[] = [
    {
      id: 1,
      src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-01.png',
    },
    {
      id: 2,
      src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-02.png',
    },
    {
      id: 3,
      src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-03.png',
    },
    {
      id: 4,
      src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-04.png',
    },
    {
      id: 5,
      src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-05.png',
    },
    {
      id: 6,
      src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-06.png',
    },
    {
      id: 7,
      src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-07.png',
    },
    {
      id: 8,
      src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-08.png',
    },
    {
      id: 9,
      src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-09.png',
    },
    {
      id: 10,
      src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-10.png',
    },
    {
      id: 11,
      src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-11.png',
    },
    {
      id: 12,
      src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-12.png',
    },
    {
      id: 13,
      src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-01.png',
    },
    {
      id: 14,
      src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-02.png',
    },
    {
      id: 15,
      src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-03.png',
    },
    {
      id: 16,
      src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-04.png',
    },
    {
      id: 17,
      src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-05.png',
    },
    {
      id: 18,
      src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-06.png',
    },
    {
      id: 19,
      src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-07.png',
    },
    {
      id: 20,
      src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-08.png',
    },
    {
      id: 21,
      src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-09.png',
    },
    {
      id: 22,
      src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-10.png',
    },
    {
      id: 23,
      src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-11.png',
    },
    {
      id: 24,
      src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-12.png',
    },

    {
      id: 25,
      src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-01.png',
    },
    {
      id: 26,
      src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-02.png',
    },
    {
      id: 27,
      src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-03.png',
    },
    {
      id: 28,
      src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-04.png',
    },
    {
      id: 29,
      src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-05.png',
    },
    {
      id: 30,
      src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-06.png',
    },
    {
      id: 31,
      src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-07.png',
    },
    {
      id: 32,
      src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-08.png',
    },
    {
      id: 33,
      src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-09.png',
    },
    {
      id: 34,
      src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-10.png',
    },
    {
      id: 35,
      src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-11.png',
    },
    {
      id: 36,
      src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-12.png',
    },
    {
      id: 37,
      src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-12.png',
    },
    {
      id: 38,
      src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-12.png',
    },
    {
      id: 39,
      src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-12.png',
    },
    {
      id: 40,
      src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-12.png',
    },
  ];

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  translateToLeft() {
    this.selectedCoverId -= 1;
    this.slidesCounter -= 1;

    if (this.slidesCounter % 12 == 0 && this.slidesCounter != 0) {
      this.totalTranslation += 1548;
      this.moveSlider();
    } else if (this.covers.length - this.slidesCounter < 12) {
      this.totalTranslation += 129;
      this.moveSlider();
    }
  }

  translateToRight() {
    this.selectedCoverId += 1;
    this.slidesCounter += 1;
    this.slidesCountMngr += 1;

    if (this.slidesCountMngr == 12) {
      if (this.covers.length - this.slidesCounter < 12) {
        this.totalTranslation -= 129;
        this.moveSlider();
      } else {
        this.totalTranslation -= 1548;
        this.slidesCountMngr = 0;
        this.moveSlider();
      }
    }
    
  }

  private moveSlider() {
    const slider = this.el.nativeElement.querySelector('.covers-holder');
    this.renderer.setStyle(
      slider,
      'transform',
      `translateX(${this.totalTranslation}px)`
    );
    this.renderer.setStyle(slider, 'transition', 'transform 500ms');
  }
}

// import { Component, ElementRef, Renderer2 } from '@angular/core';

// @Component({
//   selector: 'language-readers',
//   templateUrl: './language-readers.component.html',
//   styleUrls: ['./language-readers.component.scss'],
// })
// export class LanguageReadersComponent {
//   slideId: string = '0';
//   selectedCoverId: number = 1;
//   slidesCounter: number = 0;
//   totalTranslation: number = 0;
//   covers: { id: number; src: string }[] = [
//     {
//       id: 1,
//       src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-01.png',
//     },
//     {
//       id: 2,
//       src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-02.png',
//     },
//     {
//       id: 3,
//       src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-03.png',
//     },
//     {
//       id: 4,
//       src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-04.png',
//     },
//     {
//       id: 5,
//       src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-05.png',
//     },
//     {
//       id: 6,
//       src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-06.png',
//     },
//     {
//       id: 7,
//       src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-07.png',
//     },
//     {
//       id: 8,
//       src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-08.png',
//     },
//     {
//       id: 9,
//       src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-09.png',
//     },
//     {
//       id: 10,
//       src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-10.png',
//     },
//     {
//       id: 11,
//       src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-11.png',
//     },
//     {
//       id: 12,
//       src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-12.png',
//     },
//     {
//       id: 13,
//       src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-01.png',
//     },
//     {
//       id: 14,
//       src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-02.png',
//     },
//     {
//       id: 15,
//       src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-03.png',
//     },
//     {
//       id: 16,
//       src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-04.png',
//     },
//     {
//       id: 17,
//       src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-05.png',
//     },
//     {
//       id: 18,
//       src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-06.png',
//     },
//     {
//       id: 19,
//       src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-07.png',
//     },
//     {
//       id: 20,
//       src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-08.png',
//     },
//     {
//       id: 21,
//       src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-09.png',
//     },
//     {
//       id: 22,
//       src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-10.png',
//     },
//     {
//       id: 23,
//       src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-11.png',
//     },
//     {
//       id: 24,
//       src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-12.png',
//     },

//     {
//       id: 25,
//       src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-01.png',
//     },
//     {
//       id: 26,
//       src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-02.png',
//     },
//     {
//       id: 27,
//       src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-03.png',
//     },
//     {
//       id: 28,
//       src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-04.png',
//     },
//     {
//       id: 29,
//       src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-05.png',
//     },
//     {
//       id: 30,
//       src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-06.png',
//     },
//     {
//       id: 31,
//       src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-07.png',
//     },
//     {
//       id: 32,
//       src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-08.png',
//     },
//     {
//       id: 33,
//       src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-09.png',
//     },
//     {
//       id: 34,
//       src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-10.png',
//     },
//     {
//       id: 35,
//       src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-11.png',
//     },
//     {
//       id: 36,
//       src: '../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-12.png',
//     },
//   ];

//   constructor(private renderer: Renderer2, private el: ElementRef) {}

//   translateToLeft() {
//     this.selectedCoverId -= 1;
//     this.slidesCounter -= 1;
//     console.log('Slides Counter', this.slidesCounter);

//     if (this.slidesCounter % 12 == 0 && this.slidesCounter != 0) {
//       console.log('Left Condition Reached');
//       this.totalTranslation += 1548;
//       this.moveSlider();
//     } else if (this.slidesCounter < 12 && this.totalTranslation == 1548) {
//       this.totalTranslation += 1548;
//     }
//   }

//   translateToRight() {
//     this.selectedCoverId += 1;
//     this.slidesCounter += 1;
//     console.log('Slides Counter', this.slidesCounter);

//     if (
//       this.slidesCounter % 12 == 0 &&
//       this.slidesCounter != this.covers.length
//     ) {
//       this.totalTranslation -= 1548;
//       this.moveSlider();
//     }
//   }

//   private moveSlider() {
//     const slider = this.el.nativeElement.querySelector('.covers-holder');
//     this.renderer.setStyle(
//       slider,
//       'transform',
//       `translateX(${this.totalTranslation}px)`
//     );
//     this.renderer.setStyle(slider, 'transition', 'transform 500ms');
//   }
// }
