import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-customized-program',
  templateUrl: './customized-program.component.html',
  styleUrls: ['./customized-program.component.scss'],
})
export class CustomizedProgramComponent {

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#21425e';
  }
          

  covers_MHS: { id: number; src: string; filpProjectUrl: string }[] = [
    {
      id: 1,
      src: 'assets/Images/CustomizedProgram/MHS/amber.jpg',
      filpProjectUrl: '#',
    },

    {
      id: 2,
      src: 'assets/Images/CustomizedProgram/MHS/bioGrade12.jpg',
      filpProjectUrl: '#',
    },
    {
      id: 3,
      src: 'assets/Images/CustomizedProgram/MHS/bioLabManual.jpg',
      filpProjectUrl: '#',
    },

    {
      id: 4,
      src: 'assets/Images/CustomizedProgram/MHS/chemistryGrade11.jpg',
      filpProjectUrl: '#',
    },

    {
      id: 6,
      src: 'assets/Images/CustomizedProgram/MHS/chemistryPart1.jpg',
      filpProjectUrl: '#',
    },

    {
      id: 7,
      src: 'assets/Images/CustomizedProgram/MHS/computingLevel3.jpg',
      filpProjectUrl: '#',
    },
    {
      id: 8,
      src: 'assets/Images/CustomizedProgram/MHS/EngPart1.jpg',
      filpProjectUrl: '#',
    },
    {
      id: 9,
      src: 'assets/Images/CustomizedProgram/MHS/francais.jpg',
      filpProjectUrl: '#',
    },
    {
      id: 10,
      src: 'assets/Images/CustomizedProgram/MHS/mathArabic.jpg',
      filpProjectUrl: '#',
    },
    {
      id: 11,
      src: 'assets/Images/CustomizedProgram/MHS/mathGrade8.jpg',
      filpProjectUrl: '#',
    },
    {
      id: 12,
      src: 'assets/Images/CustomizedProgram/MHS/mathGrade9.jpg',
      filpProjectUrl: '#',
    },
    {
      id: 13,
      src: 'assets/Images/CustomizedProgram/MHS/mathGrade12.jpg',
      filpProjectUrl: '#',
    },
    {
      id: 14,
      src: 'assets/Images/CustomizedProgram/MHS/robotics3.jpg',
      filpProjectUrl: '#',
    },
    {
      id: 15,
      src: 'assets/Images/CustomizedProgram/MHS/scienceGrade9.jpg',
      filpProjectUrl: '#',
    },
  ];


  covers_BACC: { id: number; src: string; filpProjectUrl: string }[] = [
    {
      id: 1,
      src: 'assets/Images/CustomizedProgram/French Bacc/leRoman.jpg',
      filpProjectUrl: '#',
    },

    {
      id: 2,
      src: 'assets/Images/CustomizedProgram/French Bacc/leRomanXVI.jpg',
      filpProjectUrl: '#',
    },
    {
      id: 3,
      src: 'assets/Images/CustomizedProgram/French Bacc/leRomanXVIII.jpg',
      filpProjectUrl: '#',
    },

    {
      id: 4,
      src: 'assets/Images/CustomizedProgram/French Bacc/leRomanXX.jpg',
      filpProjectUrl: '#',
    },

    {
      id: 6,
      src: 'assets/Images/CustomizedProgram/French Bacc/litterature.jpg',
      filpProjectUrl: '#',
    },

    {
      id: 7,
      src: 'assets/Images/CustomizedProgram/French Bacc/roman.jpg',
      filpProjectUrl: '#',
    },
    {
      id: 8,
      src: 'assets/Images/CustomizedProgram/French Bacc/theatre.jpg',
      filpProjectUrl: '#',
    },
    {
      id: 9,
      src: 'assets/Images/CustomizedProgram/French Bacc/theatrePoesie.jpg',
      filpProjectUrl: '#',
    },
    {
      id: 10,
      src: 'assets/Images/CustomizedProgram/French Bacc/theatreXVIII.jpg',
      filpProjectUrl: '#',
    },
  ];


  covers_IB: { id: number; src: string; filpProjectUrl: string }[] = [
    {
      id: 1,
      src: 'assets/Images/CustomizedProgram/IB/math.jpg',
      filpProjectUrl: '#',
    },

    {
      id: 2,
      src: 'assets/Images/CustomizedProgram/IB//MathHLPart1.jpg',
      filpProjectUrl: '#',
    },
    {
      id: 3,
      src: 'assets/Images/CustomizedProgram/IB/MathHLPart3.jpg',
      filpProjectUrl: '#',
    },

    {
      id: 4,
      src: 'assets/Images/CustomizedProgram/IB/mathPart1.jpg',
      filpProjectUrl: '#',
    },

    {
      id: 5,
      src: 'assets/Images/CustomizedProgram/IB/mathPart3.jpg',
      filpProjectUrl: '#',
    },

    {
      id: 6,
      src: 'assets/Images/CustomizedProgram/IB/MathSLPart3.jpg',
      filpProjectUrl: '#',
    },

  ];
}
