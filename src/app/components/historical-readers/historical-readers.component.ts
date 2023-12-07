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
  book1:any;
  // initialBookWidth;
  // initialBookHeight;
  // initialWindowWidth;

  constructor() {
    // this.initialBookWidth = 100;
    // this.initialBookHeight = 115;
    // this.initialWindowWidth = window.innerWidth;
  }

  // ngAfterViewInit() {
  //   this.book1 = document.querySelector('#book-1');
  //   this.initialBookWidth = this.book1?.offsetWidth ?? 0;
  //   this.initialBookHeight = this.book1?.offsetHeight ?? 0;
  //   this.initialWindowWidth = window.innerWidth;
  //   this.onViewportChange(); // Call the function initially
  // }

  // @HostListener('window:resize', ['$event'])
  // onViewportChange() {
  //   var imageContainer:any= document.querySelector('.image-container');

  //   var containerWidth = imageContainer.offsetWidth;
  //   var containerHeight = imageContainer.offsetHeight;

  //   // Assuming the initial top and left percentages were 70% and 30%
  //   var newTop = containerHeight * 0.7;
  //   var newLeft = containerWidth * 0.3;

  //   // Hone lezem thadel resize bass afdal enak ta3mela media query
  //   var newWidth = this.initialBookWidth;
  //   var newHeight = this.initialBookHeight;
  //   if (window.innerWidth < this.initialWindowWidth) {
  //     newWidth -= 10;
  //     newHeight -= 10;
  //   } else if (window.innerWidth > this.initialWindowWidth) {
  //     newWidth += 10;
  //     newHeight += 10;
  //   }

  //   this.book1.style.top = newTop + 'px';
  //   this.book1.style.left = newLeft + 'px';
  //   this.book1.style.width = newWidth + 'px';
  //   this.book1.style.height = newHeight + 'px';
  // }
}
