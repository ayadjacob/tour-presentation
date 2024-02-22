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
  selector: 'app-language-readers-french',
  templateUrl: './language-readers-french.component.html',
  styleUrls: ['./language-readers-french.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, RouterOutlet],
})
export class LanguageReadersFrenchComponent {
  arrowImagePath: string = 'assets/Images/LanguageReaders/Arrow.png';
  constructor(private router: Router) {}
  isBouncingOut_: boolean[] = [false, false, false];
  covers_french: { id: number; src: string; filpProjectUrl: string }[] = [
    {
      id: 1,
      src: 'assets/Images/LanguageReaders/French/Covers/Cecile_1.png',
      filpProjectUrl: 'assets/FlipProjects/French/Cécile/index.html',
    },
    {
      id: 2,
      src: 'assets/Images/LanguageReaders/French/Covers/Cecile_2.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 3,
      src: 'assets/Images/LanguageReaders/French/Covers/French_Cover_E_03.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 4,
      src: 'assets/Images/LanguageReaders/French/Covers/French_Cover_F_04.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 5,
      src: 'assets/Images/LanguageReaders/French/Covers/French_Cover_F_05.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 6,
      src: 'assets/Images/LanguageReaders/French/Covers/French_Cover_G_06.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 7,
      src: 'assets/Images/LanguageReaders/French/Covers/French_Cover_G_07.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 8,
      src: 'assets/Images/LanguageReaders/French/Covers/French_Cover_H_08.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 9,
      src: 'assets/Images/LanguageReaders/French/Covers/French_Cover_H_09.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 10,
      src: 'assets/Images/LanguageReaders/French/Covers/French_Cover_E_02.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 11,
      src: 'assets/Images/LanguageReaders/French/Covers/French_Cover_I_11.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 12,
      src: 'assets/Images/LanguageReaders/French/Covers/French_Cover_I_12.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 13,
      src: 'assets/Images/LanguageReaders/French/Covers/French_Cover_I_13.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 14,
      src: 'assets/Images/LanguageReaders/French/Covers/French_Cover_J_14.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 15,
      src: 'assets/Images/LanguageReaders/French/Covers/French_Cover_J_15.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 16,
      src: 'assets/Images/LanguageReaders/French/Covers/French_Cover_K_16.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 17,
      src: 'assets/Images/LanguageReaders/French/Covers/French_Cover_K_17.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 18,
      src: 'assets/Images/LanguageReaders/French/Covers/French_Cover_K_18.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 19,
      src: 'assets/Images/LanguageReaders/French/Covers/French_Cover_K_19.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 20,
      src: 'assets/Images/LanguageReaders/French/Covers/French_Cover_K_20.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 21,
      src: 'assets/Images/LanguageReaders/French/Covers/French_Cover_D_01.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },
    {
      id: 22,
      src: 'assets/Images/LanguageReaders/French/Covers/French_Cover_I_10.png',
      filpProjectUrl:
        'assets/FlipProjects/Cabeza/Exercise Book  - Cabeza de Vaca/index.html',
    },

  ];

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

