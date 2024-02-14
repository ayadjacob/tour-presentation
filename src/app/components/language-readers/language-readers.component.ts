import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'language-readers',
  templateUrl: './language-readers.component.html',
  styleUrls: ['./language-readers.component.scss'],
})
export class LanguageReadersComponent {


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    dotsEach: true,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 10
      }
    },
    nav: true
  }

  
  slidesStore: { id: string, src: string }[] = [
    { id: "1", src: "../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-01.png" },
    { id: "2", src: "../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-02.png" },
    { id: "3", src: "../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-03.png" },
    { id: "4", src: "../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-04.png" },
    { id: "5", src: "../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-05.png" },
    { id: "6", src: "../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-06.png" },
    { id: "7", src: "../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-07.png" },
    { id: "8", src: "../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-08.png" },
    { id: "9", src: "../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-09.png" },
    { id: "10", src: "../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-10.png" },
    { id: "11", src: "../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-11.png" },
    { id: "12", src: "../../../assets/Images/LanguageReaders/Arabic/Arabic-Cover-12.png" },
    // Repeat as needed
  ];
  
  
}
