import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.scss']
})
export class ArtComponent {

  constructor(private elementRef: ElementRef, private router: Router) {}

  navigateToArtsAndHumanities() {
    this.router.navigate(['/artsAndHumanities']);
  }

}
