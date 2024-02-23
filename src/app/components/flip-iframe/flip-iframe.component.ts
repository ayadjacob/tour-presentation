// flip-iframe.component.ts
import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-flip-iframe',
  templateUrl: './flip-iframe.component.html',
  styleUrls: ['./flip-iframe.component.scss'],
})
export class FlipIframeComponent {
  flipProjectUrl!: string;
  withThumbnails!:string;
  thumbnailUrl_01!: string;
  thumbnailUrl_02!: string;
  thumbnailUrl_03!: string;
  thumbnailUrl_04!: string;
  selectedProject: string | null = 'Reader';
  projectUrl!: SafeResourceUrl;
  backButtonPath!:string;

  constructor(
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // Read the query parameter 'selectedProject' from the URL
    this.route.queryParams.subscribe((params) => {
      this.flipProjectUrl = params['flipProjectUrl'];
      this.withThumbnails = params['withThumbnails'];
      this.thumbnailUrl_01 = params['thumbnailUrl_01'];
      this.thumbnailUrl_02 = params['thumbnailUrl_02'];
      this.thumbnailUrl_03 = params['thumbnailUrl_03'];
      this.thumbnailUrl_04 = params['thumbnailUrl_04'];
      this.backButtonPath = params['backButtonPath'];
      this.projectUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.flipProjectUrl
      );
    });
  }

  changeProjectUrl(url: string, projectName: string) {
    this.projectUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    this.selectedProject = projectName; // Set the selected project
  }
}
