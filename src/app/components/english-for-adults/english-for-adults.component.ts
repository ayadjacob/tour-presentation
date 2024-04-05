import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-english-for-adults',
  templateUrl: './english-for-adults.component.html',
  styleUrls: ['./english-for-adults.component.scss'],
})
export class EnglishForAdultsComponent {
  constructor(private router: Router) {}

  notClicked: boolean = true;

  onClick() {
    this.notClicked = !this.notClicked;
  }

  navigateToWorldLanguages() {
    this.router.navigate(['/worldLanguages']);
  }
}
