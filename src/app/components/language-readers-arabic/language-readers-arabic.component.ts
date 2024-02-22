import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  Input,
  Renderer2,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

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
  isBouncingOut_: boolean[] = [false, false, false];
  covers_arabic: { id: number; src: string; filpProjectUrl: string }[] = [
    {
      id: 1,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_D_01.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 2,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_D_02.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 3,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_D_03.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 4,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_D_04.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 5,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_D_05.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 6,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_D_06.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 7,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_D_07.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 8,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_E_08.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 9,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_E_09.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 10,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_E_10.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 11,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_E_11.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 12,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_E_12.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 13,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_E_13.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 14,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_E_14.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 15,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_F_15.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 16,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_F_16.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 17,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_F_17.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 18,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_F_18.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 19,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_F_19.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 20,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_F_20.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 21,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_F_21.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 22,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_F_22.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 23,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_G_23.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 24,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_G_24.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },

    {
      id: 25,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_G_25.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 26,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_G_26.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 27,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_G_27.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 28,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_G_28.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 29,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_G_29.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 30,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_G_30.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 31,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_H_31.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 32,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_H_32.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 33,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_H_33.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 34,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_H_34.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 35,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_H_35.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 36,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_H_36.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 37,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_H_37.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 38,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_H_38.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 39,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_I_39.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 40,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_I_40.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 41,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_I_41.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 42,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_I_42.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 43,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_I_43.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 44,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_I_44.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 45,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_I_45.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 46,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_I_46.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 47,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_J_47.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 48,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_J_48.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 49,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_J_49.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 50,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_J_50.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 51,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_J_51.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 52,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_J_52.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 53,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_J_53.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 54,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_J_54.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 55,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_K_55.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 56,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_K_56.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 57,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_K_57.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 58,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_K_58.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 59,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_K_59.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 60,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_K_60.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 61,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_K_61.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 62,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_K_62.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
  ];

  constructor(private router: Router) {}

  changeClass(i:number,projectUrl:string) {
    this['isBouncingOut_'][i] = true;
    console.log("this['isBouncingOut_'][i]", this['isBouncingOut_'][i])

    // After changing the class, wait for the animation to complete before navigating
    setTimeout(() => {
      // Navigate to the specified route
       this.router.navigate(['/flip'], {
        queryParams: { 
          flipProjectUrl: projectUrl,
          withThumbnails: "false", // or 'false' depending on your requirement
        },
      });
    }, 600); // Adjust the timeout value based on your animation duration
  }
}