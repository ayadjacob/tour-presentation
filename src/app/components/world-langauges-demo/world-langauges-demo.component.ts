import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-world-langauges-demo',
  templateUrl: './world-langauges-demo.component.html',
  styleUrls: ['./world-langauges-demo.component.scss'],
})
export class WorldLangaugesDemoComponent implements OnInit {
  @Input() selectedProject: string | null | undefined;

  isEnglishSelected: boolean = false;
  isArabicSelected: boolean = false;
  isChineseSelected: boolean = false;
  isFrenchSelected: boolean = false;
  isKurdishSelected: boolean = false;
  isPortugueseSelected: boolean = false;
  isSpanishSelected: boolean = false;
  isRussianSelected: boolean = false;
  isKoreanSelected: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // Read the query parameter 'selectedProject' from the URL
    this.route.queryParams.subscribe((params) => {
      this.selectedProject = params['selectedProject'];
      this.updateSelectedFlags();
    });
  }

  // Method to update the selected flags based on the current selected project
  updateSelectedFlags() {
    this.isEnglishSelected = this.selectedProject === 'English';
    this.isArabicSelected = this.selectedProject === 'Arabic';
    this.isChineseSelected = this.selectedProject === 'Chinese';
    this.isFrenchSelected = this.selectedProject === 'French';
    this.isKurdishSelected = this.selectedProject === 'Kurdish';
    this.isPortugueseSelected = this.selectedProject === 'Portuguese';
    this.isSpanishSelected = this.selectedProject === 'Spanish';
    this.isRussianSelected = this.selectedProject === 'Russian';
    this.isKoreanSelected = this.selectedProject === 'Korean';
  }

  navigateToHistoricalReader() {
    this.router.navigate(['/historical']);
  }
}
