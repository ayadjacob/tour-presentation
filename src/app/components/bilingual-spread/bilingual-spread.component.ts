import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bilingual-spread',
  templateUrl: './bilingual-spread.component.html',
  styleUrls: ['./bilingual-spread.component.scss'],
})
export class BilingualSpreadComponent {
  flipProjectUrl!: string;
  selectedProject: string = 'Arabic';
  isMath!: string;
  projectUrl!: SafeResourceUrl;

  constructor(
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.isMath = params['isMath'];
      this.selectedProject = params['selectedProject'] || 'Arabic';
    });

    console.log('isMath', this.isMath);
    if (this.selectedProject == 'Arabic') {
      this.changeProjectUrl(
        'assets/FlipProjects/Bilingual/Arabic/index.html',
        'Arabic'
      );
    } else if (this.selectedProject == 'Russian') {
      this.changeProjectUrl(
        'assets/FlipProjects/Bilingual/Russian/index.html',
        'Russian'
      );
    } else if (this.selectedProject == 'Chinese') {
      this.changeProjectUrl(
        'assets/FlipProjects/Bilingual/Chinese/index.html',
        'Chinese'
      );
    } else if (this.selectedProject == 'Korean') {
      this.changeProjectUrl(
        'assets/FlipProjects/Bilingual/Korean/index.html',
        'Korean'
      );
    }
  }
  // Method to change the selected project and update the route
  changeProjectUrl(url: string, projectName: string) {
    this.projectUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    this.selectedProject = projectName; // Set the selected project
    this.updateRoute(); // Update the route when the project changes
  }

  // Method to update the route when the project changes
  updateRoute() {
    // Navigate to the route with the updated query parameter
    this.router.navigate(['/bilingual'], {
      queryParams: {
        selectedProject: this.selectedProject,
        isMath: this.isMath,
      },
    });
  }

  navigateToMath() {
    this.router.navigate(['/worldLanguages_dm'], {
      queryParams: {
        selectedProject: 'Math',
      },
    });
  }

  navigateToWorldLanguages() {
    this.router.navigate(['/worldLanguages']);
  }
}
