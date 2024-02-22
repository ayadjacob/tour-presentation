import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  Input,
  Renderer2,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-language-readers-french',
  templateUrl: './language-readers-french.component.html',
  styleUrls: ['./language-readers-french.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, RouterOutlet],
})
export class LanguageReadersFrenchComponent {
  arrowImagePath: string = 'assets/Images/LanguageReaders/Arrow.png';
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  covers_french: { id: number; src: string }[] = [
    {
      id: 1,
      src: 'assets/Images/LanguageReaders/French/Covers/French_Cover_D_01.png',
    },
    {
      id: 2,
      src: 'assets/Images/LanguageReaders/French/Covers/French_Cover_E_02.png',
    },
    {
      id: 3,
      src: 'assets/Images/LanguageReaders/French/Covers/French_Cover_E_03.png',
    },
    {
      id: 4,
      src: 'assets/Images/LanguageReaders/French/Covers/French_Cover_F_04.png',
    },
    {
      id: 5,
      src: 'assets/Images/LanguageReaders/French/Covers/French_Cover_F_05.png',
    },
    {
      id: 6,
      src: 'assets/Images/LanguageReaders/French/Covers/French_Cover_G_06.png',
    },
    {
      id: 7,
      src: 'assets/Images/LanguageReaders/French/Covers/French_Cover_G_07.png',
    },
    {
      id: 8,
      src: 'assets/Images/LanguageReaders/French/Covers/French_Cover_H_08.png',
    },
    {
      id: 9,
      src: 'assets/Images/LanguageReaders/French/Covers/French_Cover_H_09.png',
    },
    {
      id: 10,
      src: 'assets/Images/LanguageReaders/French/Covers/French_Cover_I_10.png',
    },
    {
      id: 11,
      src: 'assets/Images/LanguageReaders/French/Covers/French_Cover_I_11.png',
    },
    {
      id: 12,
      src: 'assets/Images/LanguageReaders/French/Covers/French_Cover_I_12.png',
    },
    {
      id: 13,
      src: 'assets/Images/LanguageReaders/French/Covers/French_Cover_I_13.png',
    },
    {
      id: 14,
      src: 'assets/Images/LanguageReaders/French/Covers/French_Cover_J_14.png',
    },
    {
      id: 15,
      src: 'assets/Images/LanguageReaders/French/Covers/French_Cover_J_15.png',
    },
    {
      id: 16,
      src: 'assets/Images/LanguageReaders/French/Covers/French_Cover_K_16.png',
    },
    {
      id: 17,
      src: 'assets/Images/LanguageReaders/French/Covers/French_Cover_K_17.png',
    },
    {
      id: 18,
      src: 'assets/Images/LanguageReaders/French/Covers/French_Cover_K_18.png',
    },
  ];
}
