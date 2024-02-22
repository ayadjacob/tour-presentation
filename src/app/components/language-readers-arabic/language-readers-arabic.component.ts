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
  selector: 'app-language-readers-arabic',
  templateUrl: './language-readers-arabic.component.html',
  styleUrls: ['./language-readers-arabic.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, RouterOutlet],
})
export class LanguageReadersArabicComponent {

  arrowImagePath: string = "assets/Images/LanguageReaders/Arrow.png";
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  covers_arabic: { id: number; src: string }[] = [
    {
      id: 1,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_D_01.png',
    },
    {
      id: 2,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_D_02.png',
    },
    {
      id: 3,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_D_03.png',
    },
    {
      id: 4,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_D_04.png',
    },
    {
      id: 5,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_D_05.png',
    },
    {
      id: 6,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_D_06.png',
    },
    {
      id: 7,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_D_07.png',
    },
    {
      id: 8,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_E_08.png',
    },
    {
      id: 9,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_E_09.png',
    },
    {
      id: 10,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_E_10.png',
    },
    {
      id: 11,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_E_11.png',
    },
    {
      id: 12,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_E_12.png',
    },
    {
      id: 13,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_E_13.png',
    },
    {
      id: 14,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_E_14.png',
    },
    {
      id: 15,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_F_15.png',
    },
    {
      id: 16,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_F_16.png',
    },
    {
      id: 17,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_F_17.png',
    },
    {
      id: 18,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_F_18.png',
    },
    {
      id: 19,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_F_19.png',
    },
    {
      id: 20,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_F_20.png',
    },
    {
      id: 21,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_F_21.png',
    },
    {
      id: 22,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_F_22.png',
    },
    {
      id: 23,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_G_23.png',
    },
    {
      id: 24,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_G_24.png',
    },

    {
      id: 25,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_G_25.png',
    },
    {
      id: 26,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_G_26.png',
    },
    {
      id: 27,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_G_27.png',
    },
    {
      id: 28,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_G_28.png',
    },
    {
      id: 29,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_G_29.png',
    },
    {
      id: 30,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_G_30.png',
    },
    {
      id: 31,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_H_31.png',
    },
    {
      id: 32,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_H_32.png',
    },
    {
      id: 33,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_H_33.png',
    },
    {
      id: 34,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_H_34.png',
    },
    {
      id: 35,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_H_35.png',
    },
    {
      id: 36,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_H_36.png',
    },
    {
      id: 37,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_H_37.png',
    },
    {
      id: 38,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_H_38.png',
    },
    {
      id: 39,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_I_39.png',
    },
    {
      id: 40,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_I_40.png',
    },
    {
      id: 41,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_I_41.png',
    },
    {
      id: 42,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_I_42.png',
    },
    {
      id: 43,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_I_43.png',
    },
    {
      id: 44,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_I_44.png',
    },
    {
      id: 45,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_I_45.png',
    },
    {
      id: 46,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_I_46.png',
    },
    {
      id: 47,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_J_47.png',
    },
    {
      id: 48,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_J_48.png',
    },
    {
      id: 49,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_J_49.png',
    },
    {
      id: 50,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_J_50.png',
    },
    {
      id: 51,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_J_51.png',
    },
    {
      id: 52,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_J_52.png',
    },
    {
      id: 53,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_J_53.png',
    },
    {
      id: 54,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_J_54.png',
    },
    {
      id: 55,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_K_55.png',
    },
    {
      id: 56,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_K_56.png',
    },
    {
      id: 57,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_K_57.png',
    },
    {
      id: 58,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_K_58.png',
    },
    {
      id: 59,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_K_59.png',
    },
    {
      id: 60,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_K_60.png',
    },
    {
      id: 61,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_K_61.png',
    },
    {
      id: 62,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_K_62.png',
    },
  ];
}
