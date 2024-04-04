import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bilingual-spread',
  templateUrl: './bilingual-spread.component.html',
  styleUrls: ['./bilingual-spread.component.scss'],
})
export class BilingualSpreadComponent {
  @Input() flipProjectUrl!: string;
  @Input() selectedProject: string = 'Arabic';
  projectUrl!: SafeResourceUrl;
  backButtonPath!: string;

  constructor(
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.selectedProject = params['selectedProject'] || 'Arabic';
    });
    if (this.selectedProject == 'Arabic') {
      this.changeProjectUrl(
        'assets/FlipProjects/Bilingual/Arabic/index.html',
        'Arabic'
      );
    }
    else if (this.selectedProject == 'Russian') {
      this.changeProjectUrl(
        'assets/FlipProjects/Bilingual/Russian/index.html',
        'Russian'
      );
    }

    else if (this.selectedProject == 'Chinese') {
      this.changeProjectUrl(
        'assets/FlipProjects/Bilingual/Chinese/index.html',
        'Chinese'
      );
    }

    // this.route.queryParams.subscribe((params) => {
    //   this.flipProjectUrl = params['flipProjectUrl'];
    //   this.backButtonPath = params['backButtonPath'];
    //   this.projectUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    //     this.flipProjectUrl
    //   );
    // });
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
      queryParams: { selectedProject: this.selectedProject },
    });
  }
}
