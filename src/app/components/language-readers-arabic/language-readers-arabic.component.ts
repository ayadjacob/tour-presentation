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
  arrowImagePath: string = 'assets/Images/LanguageReaders/attachedArrows.png';
  isBouncingOut_: boolean[] = [false, false, false];
  covers_arabic: { id: number; src: string; filpProjectUrl: string }[] = [
    {
      id: 1,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_H_37.png',
      filpProjectUrl: 'assets/FlipProjects/Arabic/Zanoubia/index.html',
    },

    {
      id: 2,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_I_43.png',
      filpProjectUrl: 'assets/FlipProjects/Arabic/Gandhi/index.html',
    },

    {
      id: 3,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_D_03.png',
      filpProjectUrl: '#',
    },
    {
      id: 4,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_D_04.png',
      filpProjectUrl: '#',
    },
    {
      id: 5,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_D_05.png',
      filpProjectUrl: '#',
    },
    {
      id: 6,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_D_06.png',
      filpProjectUrl: '#',
    },
    {
      id: 7,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_D_07.png',
      filpProjectUrl: '#',
    },
    {
      id: 8,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_E_08.png',
      filpProjectUrl: '#',
    },
    {
      id: 9,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_E_09.png',
      filpProjectUrl: '#',
    },
    {
      id: 10,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_E_10.png',
      filpProjectUrl: '#',
    },
    {
      id: 11,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_E_11.png',
      filpProjectUrl: '#',
    },
    {
      id: 12,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_E_12.png',
      filpProjectUrl: '#',
    },
    {
      id: 13,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_E_13.png',
      filpProjectUrl: '#',
    },
    {
      id: 14,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_E_14.png',
      filpProjectUrl: '#',
    },
    {
      id: 15,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_F_15.png',
      filpProjectUrl: '#',
    },
    {
      id: 16,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_F_16.png',
      filpProjectUrl: '#',
    },
    {
      id: 17,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_F_17.png',
      filpProjectUrl: '#',
    },
    {
      id: 18,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_F_18.png',
      filpProjectUrl: '#',
    },
    {
      id: 19,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_F_19.png',
      filpProjectUrl: '#',
    },
    {
      id: 20,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_F_20.png',
      filpProjectUrl: '#',
    },
    {
      id: 21,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_F_21.png',
      filpProjectUrl: '#',
    },
    {
      id: 22,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_F_22.png',
      filpProjectUrl: '#',
    },
    {
      id: 23,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_G_23.png',
      filpProjectUrl: '#',
    },
    {
      id: 24,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_G_24.png',
      filpProjectUrl: '#',
    },

    {
      id: 25,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_G_25.png',
      filpProjectUrl: '#',
    },
    {
      id: 26,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_G_26.png',
      filpProjectUrl: '#',
    },
    {
      id: 27,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_G_27.png',
      filpProjectUrl: '#',
    },
    {
      id: 28,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_G_28.png',
      filpProjectUrl: '#',
    },
    {
      id: 29,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_G_29.png',
      filpProjectUrl: '#',
    },
    {
      id: 30,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_G_30.png',
      filpProjectUrl: '#',
    },
    {
      id: 31,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_H_31.png',
      filpProjectUrl: '#',
    },
    {
      id: 32,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_H_32.png',
      filpProjectUrl: '#',
    },
    {
      id: 33,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_H_33.png',
      filpProjectUrl: '#',
    },
    {
      id: 34,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_H_34.png',
      filpProjectUrl: '#',
    },
    {
      id: 35,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_H_35.png',
      filpProjectUrl: '#',
    },
    {
      id: 36,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_H_36.png',
      filpProjectUrl: '#',
    },

    {
      id: 37,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_D_02.png',
      filpProjectUrl: '#',
    },

    {
      id: 38,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_H_38.png',
      filpProjectUrl: '#',
    },
    {
      id: 39,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_I_39.png',
      filpProjectUrl: '#',
    },
    {
      id: 40,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_I_40.png',
      filpProjectUrl: '#',
    },
    {
      id: 41,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_I_41.png',
      filpProjectUrl: '#',
    },
    {
      id: 42,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_I_42.png',
      filpProjectUrl: '#',
    },

    {
      id: 43,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_D_01.png',
      filpProjectUrl: '#',
    },

    {
      id: 44,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_I_44.png',
      filpProjectUrl: '#',
    },
    {
      id: 45,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_I_45.png',
      filpProjectUrl: '#',
    },
    {
      id: 46,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_I_46.png',
      filpProjectUrl: '#',
    },
    {
      id: 47,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_J_47.png',
      filpProjectUrl: '#',
    },
    {
      id: 48,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_J_48.png',
      filpProjectUrl: '#',
    },
    {
      id: 49,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_J_49.png',
      filpProjectUrl: '#',
    },
    {
      id: 50,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_J_50.png',
      filpProjectUrl: '#',
    },
    {
      id: 51,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_J_51.png',
      filpProjectUrl: '#',
    },
    {
      id: 52,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_J_52.png',
      filpProjectUrl: '#',
    },
    {
      id: 53,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_J_53.png',
      filpProjectUrl: '#',
    },
    {
      id: 54,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_J_54.png',
      filpProjectUrl: '#',
    },
    {
      id: 55,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_K_55.png',
      filpProjectUrl: '#',
    },
    {
      id: 56,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_K_56.png',
      filpProjectUrl: '#',
    },
    {
      id: 57,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_K_57.png',
      filpProjectUrl: '#',
    },
    {
      id: 58,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_K_58.png',
      filpProjectUrl: '#',
    },
    {
      id: 59,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_K_59.png',
      filpProjectUrl: '#',
    },
    {
      id: 60,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_K_60.png',
      filpProjectUrl: '#',
    },
    {
      id: 61,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_K_61.png',
      filpProjectUrl: '#',
    },
    {
      id: 62,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_K_62.png',
      filpProjectUrl: '#',
    },
  ];

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
            backButtonPath: '/languageReadersArabic',
          },
        });
      }, 600); // Adjust the timeout value based on your animation duration }
    }
  }
}
