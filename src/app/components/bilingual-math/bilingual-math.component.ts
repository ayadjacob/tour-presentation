// bilingual-math.component.ts

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bilingual-math',
  templateUrl: './bilingual-math.component.html',
  styleUrls: ['./bilingual-math.component.scss'],
})
export class BilingualMathComponent implements OnInit {
  @Input() selectedProject!: string;

  isArabicSelected: boolean = false;
  isFrenchSelected: boolean = false;
  isPortugueseSelected: boolean = false;
  isKoreanSelected: boolean = false;
  isChineseSelected: boolean = false;
  isSpanishSelected: boolean = false;
  isRussianSelected: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // Read the query parameter 'selectedProject' from the URL
    this.route.queryParams.subscribe((params) => {
      this.selectedProject = params['selectedProject'] || 'Arabic';
      this.updateSelectedFlags();
    });
  }

  // Method to update the selected flags based on the current selected project
  updateSelectedFlags() {
    this.isArabicSelected = this.selectedProject === 'Arabic';
    this.isFrenchSelected = this.selectedProject === 'French';
    this.isPortugueseSelected = this.selectedProject === 'Portuguese';
    this.isKoreanSelected = this.selectedProject === 'Korean';
    this.isChineseSelected = this.selectedProject === 'Chinese';
    this.isSpanishSelected = this.selectedProject === 'Spanish';
    this.isRussianSelected = this.selectedProject === 'Russian';
  }

  // Method to get the background image based on the selected project
  getBackgroundImage(project: string | null | undefined): string {
    switch (project) {
      case 'Arabic':
        return "url('assets/Images/Bilingual/P6_Arabic.jpg')";
      case 'French':
        return "url('assets/Images/Bilingual/P6_French.jpg')";
      case 'Portuguese':
        return "url('assets/Images/Bilingual/P6_Portuguese.jpg')";
      case 'Korean':
        return "url('assets/Images/Bilingual/P6_Korean.jpg')";
      case 'Chinese':
        return "url('assets/Images/Bilingual/P6_Chinese.jpg')";
      case 'Kurdish':
        return "url('assets/Images/Bilingual/P6_Kurdish.jpg')";
      case 'Spanish':
        return "url('assets/Images/Bilingual/P6_Spanish.jpg')";
      case 'Russian':
        return "url('assets/Images/Bilingual/P6_Russian.jpg')";

      default:
        return ''; // Default background image
    }
  }

  // Method to change the selected project and update the route
  changeProject(projectName: string) {
    this.selectedProject = projectName;
    this.updateSelectedFlags(); // Update the selected flags
    this.updateRoute(); // Update the route when the project changes
  }

  // Method to update the route when the project changes
  updateRoute() {
    // Navigate to the route with the updated query parameter
    this.router.navigate(['/bilingualMath'], {
      queryParams: { selectedProject: this.selectedProject },
    });
  }
}
