import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-language-readers-group',
  templateUrl: './language-readers-group.component.html',
  styleUrls: ['./language-readers-group.component.scss'],
})
export class LanguageReadersGroupComponent {
  constructor(private router: Router, private _location: Location) {}
  goBack() {
    this._location.back();
  }
  covers_arabic: { id: number; src: string; filpProjectUrl: string }[] = [
    {
      id: 1,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_H_37-01.png',
      filpProjectUrl: 'assets/FlipProjects/Arabic/Zanoubia/index.html',
    },

    {
      id: 2,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_I_43-02.png',
      filpProjectUrl: 'assets/FlipProjects/Arabic/Gandhi/index.html',
    },
    {
      id: 19,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_F_19-03.png',
      filpProjectUrl: '#',
    },
    {
      id: 21,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_F_21-04.png',
      filpProjectUrl: '#',
    },

    {
      id: 22,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_F_22-05.png',
      filpProjectUrl: '#',
    },
    {
      id: 23,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_G_23-06.png',
      filpProjectUrl: '#',
    },

    {
      id: 25,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_G_25-07.png',
      filpProjectUrl: '#',
    },

    {
      id: 29,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_G_29-08.png',
      filpProjectUrl: '#',
    },

    {
      id: 34,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_H_34-09.png',
      filpProjectUrl: '#',
    },

    {
      id: 63,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_F_15-10.png',
      filpProjectUrl: '#',
    },

    {
      id: 30,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_G_30-11.png',
      filpProjectUrl: '#',
    },
    {
      id: 33,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_H_33-12.png',
      filpProjectUrl: '#',
    },
    {
      id: 35,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_H_35-13.png',
      filpProjectUrl: '#',
    },
    {
      id: 36,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_H_36-14.png',
      filpProjectUrl: '#',
    },
    {
      id: 38,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_H_38-15.png',
      filpProjectUrl: '#',
    },
    {
      id: 41,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_I_41-16.png',
      filpProjectUrl: '#',
    },
    {
      id: 44,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_I_44-17.png',
      filpProjectUrl: '#',
    },
    {
      id: 45,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_I_45-18.png',
      filpProjectUrl: '#',
    },
    {
      id: 47,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_J_47-19.png',
      filpProjectUrl: '#',
    },
    {
      id: 49,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_J_49-20.png',
      filpProjectUrl: '#',
    },
    {
      id: 51,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_J_51-21.png',
      filpProjectUrl: '#',
    },

    {
      id: 52,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_J_52-22.png',
      filpProjectUrl: '#',
    },
    {
      id: 54,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_J_54-23.png',
      filpProjectUrl: '#',
    },

    {
      id: 55,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_K_55-24.png',
      filpProjectUrl: '#',
    },

    {
      id: 56,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_K_56-25.png',
      filpProjectUrl: '#',
    },
    {
      id: 59,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_K_59-26.png',
      filpProjectUrl: '#',
    },
    {
      id: 60,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_K_60-27.png',
      filpProjectUrl: '#',
    },
    {
      id: 61,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_K_61-28.png',
      filpProjectUrl: '#',
    },
    {
      id: 62,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_K_62-29.png',
      filpProjectUrl: '#',
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
      id: 20,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_F_20.png',
      filpProjectUrl: '#',
    },

    {
      id: 24,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_G_24.png',
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
      id: 37,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_D_02.png',
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
      id: 46,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_I_46.png',
      filpProjectUrl: '#',
    },

    {
      id: 48,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_J_48.png',
      filpProjectUrl: '#',
    },

    {
      id: 50,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_J_50.png',
      filpProjectUrl: '#',
    },

    {
      id: 53,
      src: 'assets/Images/LanguageReaders/Arabic/Covers/Arabic_Cover_J_53.png',
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
  ];

  covers_french: { id: number; src: string; filpProjectUrl: string }[] = [
    {
      id: 1,
      src: 'assets/Images/LanguageReaders/French/Covers/Cecile_1-01.png',
      filpProjectUrl: 'assets/FlipProjects/French/Cécile/index.html',
    },

    {
      id: 2,
      src: 'assets/Images/LanguageReaders/French/Covers/Cecile_2-02.png',
      filpProjectUrl: '#',
    },
    {
      id: 3,
      src: 'assets/Images/LanguageReaders/French/Covers/French_Cover_E_02-03.png',
      filpProjectUrl: '#',
    },

    {
      id: 4,
      src: 'assets/Images/LanguageReaders/French/Covers/French_Cover_F_04-04.png',
      filpProjectUrl: '#',
    },

    {
      id: 6,
      src: 'assets/Images/LanguageReaders/French/Covers/French_Cover_G_06-05.png',
      filpProjectUrl: '#',
    },

    {
      id: 8,
      src: 'assets/Images/LanguageReaders/French/Covers/French_Cover_H_08-06.png',
      filpProjectUrl: '#',
    },
    {
      id: 7,
      src: 'assets/Images/LanguageReaders/French/Covers/French_Cover_G_07-07.png',
      filpProjectUrl: '#',
    },

    {
      id: 9,
      src: 'assets/Images/LanguageReaders/French/Covers/French_Cover_H_09-08.png',
      filpProjectUrl: '#',
    },
    {
      id: 15,
      src: 'assets/Images/LanguageReaders/French/Covers/French_Cover_J_15-09.png',
      filpProjectUrl: '#',
    },
    {
      id: 16,
      src: 'assets/Images/LanguageReaders/French/Covers/French_Cover_K_16-10.png',
      filpProjectUrl: '#',
    },
    {
      id: 13,
      src: 'assets/Images/LanguageReaders/French/Covers/French_Cover_I_13-11.png',
      filpProjectUrl: '#',
    },
    {
      id: 5,
      src: 'assets/Images/LanguageReaders/French/Covers/French_Cover_F_05-12.png',
      filpProjectUrl: '#',
    },

    {
      id: 14,
      src: 'assets/Images/LanguageReaders/French/Covers/French_Cover_J_14-13.png',
      filpProjectUrl: '#',
    },

    {
      id: 19,
      src: 'assets/Images/LanguageReaders/French/Covers/French_Cover_K_19-14.png',
      filpProjectUrl: '#',
    },
    {
      id: 11,
      src: 'assets/Images/LanguageReaders/French/Covers/French_Cover_I_11-15.png',
      filpProjectUrl: '#',
    },

    {
      id: 3,
      src: 'assets/Images/LanguageReaders/French/Covers/French_Cover_E_03-05.png',
      filpProjectUrl: '#',
    },

    {
      id: 10,
      src: 'assets/Images/LanguageReaders/French/Covers/French_Cover_I_10.png',
      filpProjectUrl: '#',
    },

    {
      id: 12,
      src: 'assets/Images/LanguageReaders/French/Covers/French_Cover_I_12.png',
      filpProjectUrl: '#',
    },

    {
      id: 17,
      src: 'assets/Images/LanguageReaders/French/Covers/French_Cover_K_17.png',
      filpProjectUrl: '#',
    },
    {
      id: 18,
      src: 'assets/Images/LanguageReaders/French/Covers/French_Cover_K_18.png',
      filpProjectUrl: '#',
    },

    {
      id: 20,
      src: 'assets/Images/LanguageReaders/French/Covers/French_Cover_K_20.png',
      filpProjectUrl: '#',
    },
    {
      id: 21,
      src: 'assets/Images/LanguageReaders/French/Covers/French_Cover_D_01.png',
      filpProjectUrl: '#',
    },
  ];

  covers_portuguese: { id: number; src: string; filpProjectUrl: string }[] = [
    {
      id: 1,
      src: 'assets/Images/LanguageReaders/Portuguese/Covers/Portuguese_Cover_J_14-01.png',
      filpProjectUrl:
        'assets/FlipProjects/Portuguese/Alexander-O-Grande/index.html',
    },
    {
      id: 16,
      src: 'assets/Images/LanguageReaders/Portuguese/Covers/Portuguese_Cover_J_16-03.png',
      filpProjectUrl: 'assets/FlipProjects/Portuguese/Catarina/index.html',
    },

    {
      id: 2,
      src: 'assets/Images/LanguageReaders/Portuguese/Covers/Portuguese_Cover_G_09-02.png',
      filpProjectUrl: '#',
    },

    {
      id: 7,
      src: 'assets/Images/LanguageReaders/Portuguese/Covers/Portuguese_Cover_F_07-04.png',
      filpProjectUrl: '#',
    },
    {
      id: 8,
      src: 'assets/Images/LanguageReaders/Portuguese/Covers/Portuguese_Cover_G_08-05.png',
      filpProjectUrl: '#',
    },
    {
      id: 11,
      src: 'assets/Images/LanguageReaders/Portuguese/Covers/Portuguese_Cover_H_11-07.png',
      filpProjectUrl: '#',
    },
    {
      id: 13,
      src: 'assets/Images/LanguageReaders/Portuguese/Covers/Portuguese_Cover_I_13-08.png',
      filpProjectUrl: '#',
    },
    {
      id: 15,
      src: 'assets/Images/LanguageReaders/Portuguese/Covers/Portuguese_Cover_J_15-09.png',
      filpProjectUrl: '#',
    },
    {
      id: 6,
      src: 'assets/Images/LanguageReaders/Portuguese/Covers/Portuguese_Cover_F_06-10.png',
      filpProjectUrl: '#',
    },
    {
      id: 10,
      src: 'assets/Images/LanguageReaders/Portuguese/Covers/Portuguese_Cover_H_10-11.png',
      filpProjectUrl: '#',
    },
    {
      id: 12,
      src: 'assets/Images/LanguageReaders/Portuguese/Covers/Portuguese_Cover_I_12-12.png',
      filpProjectUrl: '#',
    },

    {
      id: 3,
      src: 'assets/Images/LanguageReaders/Portuguese/Covers/Portuguese_Cover_E_03.png',
      filpProjectUrl: '#',
    },
    {
      id: 4,
      src: 'assets/Images/LanguageReaders/Portuguese/Covers/Portuguese_Cover_E_04.png',
      filpProjectUrl: '#',
    },
    {
      id: 5,
      src: 'assets/Images/LanguageReaders/Portuguese/Covers/Portuguese_Cover_F_05.png',
      filpProjectUrl: '#',
    },

    {
      id: 9,
      src: 'assets/Images/LanguageReaders/Portuguese/Covers/Portuguese_Cover_D_02.png',
      filpProjectUrl: '#',
    },

    {
      id: 14,
      src: 'assets/Images/LanguageReaders/Portuguese/Covers/Portuguese_Cover_D_01.png',
      filpProjectUrl: '#',
    },

    {
      id: 17,
      src: 'assets/Images/LanguageReaders/Portuguese/Covers/Portuguese_Cover_K_17.png',
      filpProjectUrl: '#',
    },
    {
      id: 18,
      src: 'assets/Images/LanguageReaders/Portuguese/Covers/Portuguese_Cover_L_18.png',
      filpProjectUrl: '#',
    },
  ];

  covers_spanish: { id: number; src: string; filpProjectUrl: string }[] = [
    {
      id: 1,
      src: 'assets/Images/LanguageReaders/Spanish/Covers/Spanish_Cover_F_10-01.png',
      filpProjectUrl: 'assets/FlipProjects/Spanish/Robin Hood/index.html',
    },
    {
      id: 2,
      src: 'assets/Images/LanguageReaders/Spanish/Covers/Spanish_Cover_G_11-02.png',
      filpProjectUrl: 'assets/FlipProjects/Spanish/Caballo loco/index.html',
    },

    {
      id: 14,
      src: 'assets/Images/LanguageReaders/Spanish/Covers/Spanish_Cover_I_18-05.png',
      filpProjectUrl: '#',
    },

    {
      id: 18,
      src: 'assets/Images/LanguageReaders/Spanish/Covers/Spanish_Cover_H_14-03.png',
      filpProjectUrl: '#',
    },

    {
      id: 17,
      src: 'assets/Images/LanguageReaders/Spanish/Covers/Spanish_Cover_I_17-06.png',
      filpProjectUrl: '#',
    },

    {
      id: 19,
      src: 'assets/Images/LanguageReaders/Spanish/Covers/Spanish_Cover_J_19-07.png',
      filpProjectUrl: '#',
    },
    {
      id: 22,
      src: 'assets/Images/LanguageReaders/Spanish/Covers/Spanish_Cover_J_22-08.png',
      filpProjectUrl: '#',
    },
    {
      id: 23,
      src: 'assets/Images/LanguageReaders/Spanish/Covers/Spanish_Cover_K_23-09.png',
      filpProjectUrl: '#',
    },
    {
      id: 24,
      src: 'assets/Images/LanguageReaders/Spanish/Covers/Spanish_Cover_K_24-10.png',
      filpProjectUrl: '#',
    },
    {
      id: 20,
      src: 'assets/Images/LanguageReaders/Spanish/Covers/Spanish_Cover_J_20-11.png',
      filpProjectUrl: '#',
    },

    {
      id: 3,
      src: 'assets/Images/LanguageReaders/Spanish/Covers/Spanish_Cover_C_03.png',
      filpProjectUrl: '#',
    },
    {
      id: 4,
      src: 'assets/Images/LanguageReaders/Spanish/Covers/Spanish_Cover_C_04.png',
      filpProjectUrl: '#',
    },
    {
      id: 5,
      src: 'assets/Images/LanguageReaders/Spanish/Covers/Spanish_Cover_E_05.png',
      filpProjectUrl: '#',
    },
    {
      id: 6,
      src: 'assets/Images/LanguageReaders/Spanish/Covers/Spanish_Cover_E_06.png',
      filpProjectUrl: '#',
    },
    {
      id: 7,
      src: 'assets/Images/LanguageReaders/Spanish/Covers/Spanish_Cover_E_07.png',
      filpProjectUrl: '#',
    },
    {
      id: 8,
      src: 'assets/Images/LanguageReaders/Spanish/Covers/Spanish_Cover_E_08.png',
      filpProjectUrl: '#',
    },
    {
      id: 9,
      src: 'assets/Images/LanguageReaders/Spanish/Covers/Spanish_Cover_F_09.png',
      filpProjectUrl: '#',
    },

    {
      id: 10,
      src: 'assets/Images/LanguageReaders/Spanish/Covers/Spanish_Cover_C_01.png',
      filpProjectUrl: '#',
    },
    {
      id: 11,
      src: 'assets/Images/LanguageReaders/Spanish/Covers/Spanish_Cover_C_02.png',
      filpProjectUrl: '#',
    },

    {
      id: 12,
      src: 'assets/Images/LanguageReaders/Spanish/Covers/Spanish_Cover_G_12.png',
      filpProjectUrl: '#',
    },
    {
      id: 13,
      src: 'assets/Images/LanguageReaders/Spanish/Covers/Spanish_Cover_G_13.png',
      filpProjectUrl: '#',
    },

    {
      id: 15,
      src: 'assets/Images/LanguageReaders/Spanish/Covers/Spanish_Cover_H_15.png',
      filpProjectUrl: '#',
    },

    {
      id: 21,
      src: 'assets/Images/LanguageReaders/Spanish/Covers/Spanish_Cover_J_21.png',
      filpProjectUrl: '#',
    },
  ];

  navigateToWorldLanguages() {
    this.router.navigate(['/worldLanguages']);
  }
}
