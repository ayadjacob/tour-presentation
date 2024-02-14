import { Component } from '@angular/core';

import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'language-readers',
  templateUrl: './language-readers.component.html',
  styleUrls: ['./language-readers.component.scss']
})


export class LanguageReadersComponent {

  slideConfig = {"slidesToShow": 12, "slidesToScroll": 1};

  booksCovers:string[] = [
    "../../../assets/Images/LanguageReaders/Arabic/Covers/Cover-01.png",
    "../../../assets/Images/LanguageReaders/Arabic/Covers/Cover-02.png",
    "../../../assets/Images/LanguageReaders/Arabic/Covers/Cover-03.png",
    "../../../assets/Images/LanguageReaders/Arabic/Covers/Cover-04.png",
    "../../../assets/Images/LanguageReaders/Arabic/Covers/Cover-05.png",
    "../../../assets/Images/LanguageReaders/Arabic/Covers/Cover-06.png",
    "../../../assets/Images/LanguageReaders/Arabic/Covers/Cover-07.png",
    "../../../assets/Images/LanguageReaders/Arabic/Covers/Cover-08.png",
    "../../../assets/Images/LanguageReaders/Arabic/Covers/Cover-09.png",
    "../../../assets/Images/LanguageReaders/Arabic/Covers/Cover-10.png",
    "../../../assets/Images/LanguageReaders/Arabic/Covers/Cover-11.png",
    "../../../assets/Images/LanguageReaders/Arabic/Covers/Cover-12.png",
    "../../../assets/Images/LanguageReaders/Arabic/Covers/Cover-01.png",
    "../../../assets/Images/LanguageReaders/Arabic/Covers/Cover-02.png",
    "../../../assets/Images/LanguageReaders/Arabic/Covers/Cover-03.png",
    "../../../assets/Images/LanguageReaders/Arabic/Covers/Cover-04.png",
    "../../../assets/Images/LanguageReaders/Arabic/Covers/Cover-05.png",
    "../../../assets/Images/LanguageReaders/Arabic/Covers/Cover-06.png",
    "../../../assets/Images/LanguageReaders/Arabic/Covers/Cover-07.png",
    "../../../assets/Images/LanguageReaders/Arabic/Covers/Cover-08.png",
    "../../../assets/Images/LanguageReaders/Arabic/Covers/Cover-09.png",
    "../../../assets/Images/LanguageReaders/Arabic/Covers/Cover-10.png",
    "../../../assets/Images/LanguageReaders/Arabic/Covers/Cover-11.png",
    "../../../assets/Images/LanguageReaders/Arabic/Covers/Cover-12.png"
  ];

}
