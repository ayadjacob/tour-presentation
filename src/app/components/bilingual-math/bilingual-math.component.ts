import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-bilingual-math',
  templateUrl: './bilingual-math.component.html',
  styleUrls: ['./bilingual-math.component.scss'],
})
export class BilingualMathComponent implements OnInit {
  projectUrl: SafeResourceUrl | undefined;

  @Input() selectedProject: string | null | undefined;

  constructor(
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // Read the query parameter 'selectedProject' from the URL
    this.route.queryParams.subscribe((params) => {
      this.selectedProject = params['selectedProject'] || 'Arabic';
      this.updateProjectUrl();
    });
  }

  changeProjectUrl(url: string, projectName: string) {
    this.projectUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    this.selectedProject = projectName;
    this.updateRoute(); // Update the route when the project changes
  }

  private updateProjectUrl() {
    // Assuming you have a mapping of projects to URLs
    const projectUrlMapping: { [key: string]: string } = {
      Arabic:
        'assets/FlipProjects/Blingual Math/Arabic/Algebra 1 Part 1 (En-Ar)/index.html',
      French:
        'assets/FlipProjects/Blingual Math/French/Algebra 1 Part 1 FR/index.html',
      Portuguese:
        'assets/FlipProjects/Blingual Math/Portuguese/Algebra 1 Part 1 (Por-Eng)/index.html',
      Korean:
        'assets/FlipProjects/Blingual Math/Korean/Algebra 1 Part 1 (Eng-Ko)/index.html',
      Chinese:
        'assets/FlipProjects/Blingual Math/Chinese/Mathematical Studies 2 Part 2 (EN-CN)/index.html',
      Kurdish: 'assets/FlipProjects/Blingual Math/Kurdish/YourProjectUrlHere', // Add the correct URL
      Spanish:
        'assets/FlipProjects/Blingual Math/Spanish/Algebra 1 Part 1(En-Sp)/index.html',
      Russian:
        'assets/FlipProjects/Blingual Math/Russian/Algebra 1 Part 1(En-Ru)/index.html',
      // Add more languages as needed
    };

    // Set the projectUrl based on the selectedProject
    const urlForSelectedProject =
      projectUrlMapping[this.selectedProject || 'Arabic'];
    if (urlForSelectedProject) {
      this.projectUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        urlForSelectedProject
      );
    } else {
      console.error('Invalid project selected:', this.selectedProject);
      // Optionally handle the error or provide user feedback
    }
  }

  private updateRoute() {
    // Navigate to the route with the updated query parameter
    this.router.navigate(['/bilingualMath'], {
      queryParams: { selectedProject: this.selectedProject },
    });
  }
}
