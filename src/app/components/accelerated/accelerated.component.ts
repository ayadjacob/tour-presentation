import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-accelerated',
  templateUrl: './accelerated.component.html',
  styleUrls: ['./accelerated.component.scss'],
})
export class AcceleratedComponent {

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#21425e';
  }
  covers_Arabic: { id: number; src: string; filpProjectUrl: string }[] = [
    {
      id: 1,
      src: 'assets/Images/Accelerated/Arabic/A-AccArabic1-Part1.png',
      filpProjectUrl: '#',
    },

    {
      id: 2,
      src: 'assets/Images/Accelerated/Arabic/C-arabiya1-Part1.png',
      filpProjectUrl: '#',
    },
    {
      id: 3,
      src: 'assets/Images/Accelerated/Arabic/D-accArabicLevel_Part1.png',
      filpProjectUrl: '#',
    },

    {
      id: 4,
      src: 'assets/Images/Accelerated/Arabic/F-AccArabic3.png',
      filpProjectUrl: '#',
    },

    {
      id: 6,
      src: 'assets/Images/Accelerated/Arabic/F-loghatelDad.png',
      filpProjectUrl: '#',
    },

    {
      id: 8,
      src: 'assets/Images/Accelerated/Arabic/H-AccArab4part1.png',
      filpProjectUrl: '#',
    },
    {
      id: 7,
      src: 'assets/Images/Accelerated/Arabic/H-loghatelDad4.png',
      filpProjectUrl: '#',
    },

    {
      id: 9,
      src: 'assets/Images/Accelerated/Arabic/J-Acc-Arabic-Level5_Part1.png',
      filpProjectUrl: '#',
    },
    {
      id: 10,
      src: 'assets/Images/Accelerated/Arabic/J-loughat_Al_Dad_Part1.png',
      filpProjectUrl: '#',
    },
  ];

  covers_English: { id: number; src: string; filpProjectUrl: string }[] = [
    {
      id: 1,
      src: 'assets/Images/Accelerated/English/C-AccEng-1Part1.jpg',
      filpProjectUrl: '#',
    },

    {
      id: 2,
      src: 'assets/Images/Accelerated/English/C-AccEng-YL-1Part1.jpg',
      filpProjectUrl: '#',
    },
    {
      id: 3,
      src: 'assets/Images/Accelerated/English/C-MHS.jpg',
      filpProjectUrl: '#',
    },

    {
      id: 4,
      src: 'assets/Images/Accelerated/English/C-Phonics.jpg',
      filpProjectUrl: '#',
    },

    {
      id: 6,
      src: 'assets/Images/Accelerated/English/D-AccEng-OL-1Part2.jpg',
      filpProjectUrl: '#',
    },

    {
      id: 8,
      src: 'assets/Images/Accelerated/English/D-AccEng-YL-2Part1.jpg',
      filpProjectUrl: '#',
    },
    {
      id: 7,
      src: 'assets/Images/Accelerated/English/D-AccEng-YL-2Part2.jpg',
      filpProjectUrl: '#',
    },

    {
      id: 9,
      src: 'assets/Images/Accelerated/English/D-AccPhonics.jpg',
      filpProjectUrl: '#',
    },
    {
      id: 11,
      src: 'assets/Images/Accelerated/English/D-MHS.jpg',
      filpProjectUrl: '#',
    },
    {
      id: 12,
      src: 'assets/Images/Accelerated/English/E-AccEng-OL-2Part1.jpg',
      filpProjectUrl: '#',
    },
    {
      id: 13,
      src: 'assets/Images/Accelerated/English/E-AccEng-YL-2Part3.jpg',
      filpProjectUrl: '#',
    },
    {
      id: 14,
      src: 'assets/Images/Accelerated/English/E-AccEng-YL-2Part4.jpg',
      filpProjectUrl: '#',
    },
    {
      id: 15,
      src: 'assets/Images/Accelerated/English/E-MHS.jpg',
      filpProjectUrl: '#',
    },
    {
      id: 16,
      src: 'assets/Images/Accelerated/English/E-Phonics.jpg',
      filpProjectUrl: '#',
    },
    {
      id: 17,
      src: 'assets/Images/Accelerated/English/F-AccEng-2Part1.jpg',
      filpProjectUrl: '#',
    },
    {
      id: 18,
      src: 'assets/Images/Accelerated/English/F-AccEng-2Part2.jpg',
      filpProjectUrl: '#',
    },
    {
      id: 19,
      src: 'assets/Images/Accelerated/English/F-AccEng-YL-Part1.jpg',
      filpProjectUrl: '#',
    },
    {
      id: 20,
      src: 'assets/Images/Accelerated/English/F-AccEng-YL-Part2.jpg',
      filpProjectUrl: '#',
    },
    {
      id: 21,
      src: 'assets/Images/Accelerated/English/F-AccGrammar-revision.jpg',
      filpProjectUrl: '#',
    },
    {
      id: 22,
      src: 'assets/Images/Accelerated/English/F-AccGrammar.jpg',
      filpProjectUrl: '#',
    },
    {
      id: 23,
      src: 'assets/Images/Accelerated/English/F-AccLiteracy2-Part1.jpg',
      filpProjectUrl: '#',
    },
    {
      id: 24,
      src: 'assets/Images/Accelerated/English/F-AccLiteracyIV.jpg',
      filpProjectUrl: '#',
    },
    {
      id: 25,
      src: 'assets/Images/Accelerated/English/F-MHS 2Part1.jpg',
      filpProjectUrl: '#',
    },
    {
      id: 26,
      src: 'assets/Images/Accelerated/English/F-MHS-literacySkills.jpg',
      filpProjectUrl: '#',
    },
    {
      id: 27,
      src: 'assets/Images/Accelerated/English/F-MHSGrammar.jpg',
      filpProjectUrl: '#',
    },
    {
      id: 28,
      src: 'assets/Images/Accelerated/English/G-AccEngOL-2Part2.jpg',
      filpProjectUrl: '#',
    },





    {
      id: 29,
      src: 'assets/Images/Accelerated/English/G-AEYL-V-Part1-MHS.png',
      filpProjectUrl: '#',
    },
    {
      id: 30,
      src: 'assets/Images/Accelerated/English/G-AEYL-V-Part1.png',
      filpProjectUrl: '#',
    },
    {
      id: 31,
      src: 'assets/Images/Accelerated/English/G-ALSOL-2-Part2-MHS.png',
      filpProjectUrl: '#',
    },
    {
      id: 32,
      src: 'assets/Images/Accelerated/English/G-ALSOL-2-Part2.png',
      filpProjectUrl: '#',
    },
    {
      id: 33,
      src: 'assets/Images/Accelerated/English/H-AEOL3-Part1-MHS.png',
      filpProjectUrl: '#',
    },
    {
      id: 34,
      src: 'assets/Images/Accelerated/English/H-AEOL3-Part1.png',
      filpProjectUrl: '#',
    },
    {
      id: 35,
      src: 'assets/Images/Accelerated/English/I-MasterYourGrammar-ACC.png',
      filpProjectUrl: '#',
    },
    {
      id: 36,
      src: 'assets/Images/Accelerated/English/I-MasterYourGrammar.png',
      filpProjectUrl: '#',
    },
    {
      id: 37,
      src: 'assets/Images/Accelerated/English/J-AEOL4-Part1-MHS.png',
      filpProjectUrl: '#',
    },
    {
      id: 38,
      src: 'assets/Images/Accelerated/English/J-AEOL4-Part1.png',
      filpProjectUrl: '#',
    },
  ];

  covers_French: { id: number; src: string; filpProjectUrl: string }[] = [
    {
      id: 1,
      src: 'assets/Images/Accelerated/French/H-universAdo1.jpg',
      filpProjectUrl: '#',
    },

    {
      id: 2,
      src: 'assets/Images/Accelerated/French/I-universAdo2.jpg',
      filpProjectUrl: '#',
    },
    {
      id: 3,
      src: 'assets/Images/Accelerated/French/J-universAdo3.jpg',
      filpProjectUrl: '#',
    },

    {
      id: 4,
      src: 'assets/Images/Accelerated/French/K-UniversAdo4.jpg',
      filpProjectUrl: '#',
    },

    {
      id: 6,
      src: 'assets/Images/Accelerated/French/L-universAdo5.jpg',
      filpProjectUrl: '#',
    },

    {
      id: 8,
      src: 'assets/Images/Accelerated/French/M-universAdo6.jpg',
      filpProjectUrl: '#',
    },
  ];

  covers_Math: { id: number; src: string; filpProjectUrl: string }[] = [
    {
      id: 1,
      src: 'assets/Images/Accelerated/Math/E-AccMath1.jpg',
      filpProjectUrl: '#',
    },

    {
      id: 2,
      src: 'assets/Images/Accelerated/Math/E-AccMath1-Quest.jpg',
      filpProjectUrl: '#',
    },
    {
      id: 3,
      src: 'assets/Images/Accelerated/Math/E-AccMathPart1.jpg',
      filpProjectUrl: '#',
    },

    {
      id: 4,
      src: 'assets/Images/Accelerated/Math/E-AccMathPart2.png',
      filpProjectUrl: '#',
    },

    {
      id: 6,
      src: 'assets/Images/Accelerated/Math/E-AccMathPart3.png',
      filpProjectUrl: '#',
    },

    {
      id: 8,
      src: 'assets/Images/Accelerated/Math/F-AccMath2-Part1.png',
      filpProjectUrl: '#',
    },
    {
      id: 7,
      src: 'assets/Images/Accelerated/Math/F-AccMath2-Part2.png',
      filpProjectUrl: '#',
    },

    {
      id: 9,
      src: 'assets/Images/Accelerated/Math/F-AccMath2-Part3.png',
      filpProjectUrl: '#',
    },
    {
      id: 11,
      src: 'assets/Images/Accelerated/Math/F-AccMath2-Quest.png',
      filpProjectUrl: '#',
    },
    {
      id: 12,
      src: 'assets/Images/Accelerated/Math/G-AccMath3-Part1.png',
      filpProjectUrl: '#',
    },
    {
      id: 13,
      src: 'assets/Images/Accelerated/Math/G-AccMath3-Part2.png',
      filpProjectUrl: '#',
    },
    {
      id: 14,
      src: 'assets/Images/Accelerated/Math/G-AccMath3-Part3.png',
      filpProjectUrl: '#',
    },
    {
      id: 15,
      src: 'assets/Images/Accelerated/Math/G-AccMath3-Quest.png',
      filpProjectUrl: '#',
    },
    {
      id: 16,
      src: 'assets/Images/Accelerated/Math/H-AccMath4-Part1.png',
      filpProjectUrl: '#',
    },
    {
      id: 17,
      src: 'assets/Images/Accelerated/Math/H-AccMath4-Part2.png',
      filpProjectUrl: '#',
    },
    {
      id: 18,
      src: 'assets/Images/Accelerated/Math/H-AccMath4-Part3.png',
      filpProjectUrl: '#',
    },
    {
      id: 19,
      src: 'assets/Images/Accelerated/Math/H-AccMath4-Quest.png',
      filpProjectUrl: '#',
    },
    {
      id: 20,
      src: 'assets/Images/Accelerated/Math/I-AccAlgebra-arabic.jpg',
      filpProjectUrl: '#',
    },
    {
      id: 21,
      src: 'assets/Images/Accelerated/Math/I-AccAlgebra-French1.jpg',
      filpProjectUrl: '#',
    },
    {
      id: 22,
      src: 'assets/Images/Accelerated/Math/I-Algebra.jpg',
      filpProjectUrl: '#',
    },
    {
      id: 23,
      src: 'assets/Images/Accelerated/Math/J-AccAlgebra-arabic2.jpg',
      filpProjectUrl: '#',
    },
    {
      id: 24,
      src: 'assets/Images/Accelerated/Math/J-AccAlgebra-French2.jpg',
      filpProjectUrl: '#',
    },
    {
      id: 25,
      src: 'assets/Images/Accelerated/Math/J-AccGeometry.jpg',
      filpProjectUrl: '#',
    },
    {
      id: 26,
      src: 'assets/Images/Accelerated/Math/J-AccGeometry-Arabic1.jpg',
      filpProjectUrl: '#',
    },
    {
      id: 27,
      src: 'assets/Images/Accelerated/Math/J-Algebra2.jpg',
      filpProjectUrl: '#',
    },
    {
      id: 28,
      src: 'assets/Images/Accelerated/Math/J-geometryFrnech1.jpg',
      filpProjectUrl: '#',
    },
    {
      id: 29,
      src: 'assets/Images/Accelerated/Math/K-AccAlgebra-arabic3.jpg',
      filpProjectUrl: '#',
    },
    {
      id: 30,
      src: 'assets/Images/Accelerated/Math/K-AccAlgebra-French3.jpg',
      filpProjectUrl: '#',
    },
    {
      id: 31,
      src: 'assets/Images/Accelerated/Math/K-AccGeometry2.jpg',
      filpProjectUrl: '#',
    },
    {
      id: 32,
      src: 'assets/Images/Accelerated/Math/K-AccGeometry-Arabic2.jpg',
      filpProjectUrl: '#',
    },
    {
      id: 33,
      src: 'assets/Images/Accelerated/Math/K-Algeba3.jpg',
      filpProjectUrl: '#',
    },
    {
      id: 34,
      src: 'assets/Images/Accelerated/Math/K-geometryFrnech2.jpg',
      filpProjectUrl: '#',
    },
  ];

  covers_Portuguese: { id: number; src: string; filpProjectUrl: string }[] = [
    {
      id: 1,
      src: 'assets/Images/Accelerated/Portuguese/A-port1.jpg',
      filpProjectUrl: '#',
    },

    {
      id: 2,
      src: 'assets/Images/Accelerated/Portuguese/A-port1-part2.jpg',
      filpProjectUrl: '#',
    },
    {
      id: 3,
      src: 'assets/Images/Accelerated/Portuguese/B-port2part1.jpg',
      filpProjectUrl: '#',
    },

    {
      id: 4,
      src: 'assets/Images/Accelerated/Portuguese/B-port2Part2.jpg',
      filpProjectUrl: '#',
    },

    {
      id: 6,
      src: 'assets/Images/Accelerated/Portuguese/C-port3Part1.jpg',
      filpProjectUrl: '#',
    },

    {
      id: 8,
      src: 'assets/Images/Accelerated/Portuguese/C-port3Part2.jpg',
      filpProjectUrl: '#',
    },
  ];

  covers_Spanish: { id: number; src: string; filpProjectUrl: string }[] = [
    {
      id: 1,
      src: 'assets/Images/Accelerated/Spanish/C-andres1.jpg',
      filpProjectUrl: '#',
    },

    {
      id: 2,
      src: 'assets/Images/Accelerated/Spanish/C-Andres2.jpg',
      filpProjectUrl: '#',
    },
    {
      id: 3,
      src: 'assets/Images/Accelerated/Spanish/D-andres2.jpg',
      filpProjectUrl: '#',
    },

    {
      id: 4,
      src: 'assets/Images/Accelerated/Spanish/D-trabajo2.jpg',
      filpProjectUrl: '#',
    },

    {
      id: 5,
      src: 'assets/Images/Accelerated/Spanish/F-andres3.jpg',
      filpProjectUrl: '#',
    },

    {
      id: 6,
      src: 'assets/Images/Accelerated/Spanish/F-andres3-2.jpg',
      filpProjectUrl: '#',
    },
    {
      id: 7,
      src: 'assets/Images/Accelerated/Spanish/G-andres4.jpg',
      filpProjectUrl: '#',
    },
    {
      id: 8,
      src: 'assets/Images/Accelerated/Spanish/G-andres4-2.jpg',
      filpProjectUrl: '#',
    },
  ];
}
