// flip-iframe.component.ts
import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-flip-iframe',
  templateUrl: './flip-iframe.component.html',
  styleUrls: ['./flip-iframe.component.scss'],
})
export class FlipIframeComponent {
  projectUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    'assets/FlipProjects/Reader  - Cabeza de Vaca/index.html'
  );
  selectedProject: string | null = 'Reader'; // Track the selected project

  constructor(private sanitizer: DomSanitizer) {}

  changeProjectUrl(url: string, projectName: string) {
    this.projectUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    this.selectedProject = projectName; // Set the selected project
  }
}
