import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss'],
})
export class MusicComponent {
  constructor(private elementRef: ElementRef, private router: Router) {}

  navigateToArtsAndHumanities() {
    this.router.navigate(['/artsAndHumanities']);
  }
}
