import { Component, ElementRef, Input, Renderer2 } from '@angular/core';

@Component({
  selector: 'language-readers',
  templateUrl: './language-readers.component.html',
  styleUrls: ['./language-readers.component.scss'],
})
export class LanguageReadersComponent {

  @Input() covers: { id: number; src: string }[] = [];
  @Input() leftImagePath: string = '';
  @Input() arrowImagePath: string = '';
  @Input() dotBackgroundColor: string = '';

  selectedCoverId: number = 1;
  slidesCounterRight: number = 0;
  slidesCounterLeft: number = 0;
  totalTranslation: number = 0;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  translateToLeft() {
    this.selectedCoverId -= 1;

    if (this.slidesCounterLeft == 0) {
      console.log('Left condition reached');
      this.slidesCounterRight = 11;
      this.slidesCounterLeft = -11;
      this.totalTranslation += 1548;
      this.moveSlider();
    } else {
      this.slidesCounterLeft += 1;
      this.slidesCounterRight -= 1;
    }
  }

  translateToRight() {
    this.selectedCoverId += 1;
    this.slidesCounterLeft -= 1;
    this.slidesCounterRight += 1;

    if (this.slidesCounterRight == 12) {
      this.slidesCounterRight = 0;
      this.slidesCounterLeft = 0;
      this.totalTranslation -= 1548;
      this.moveSlider();
    }
    else  if (this.slidesCounterRight == 13) {
      this.slidesCounterRight = 0;
      this.slidesCounterLeft = 0;
      this.totalTranslation -= 1548;
      this.moveSlider();
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
