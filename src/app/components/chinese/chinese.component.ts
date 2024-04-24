import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chinese',
  templateUrl: './chinese.component.html',
  styleUrls: ['./chinese.component.scss']
})
export class ChineseComponent {

  constructor(private router: Router) {}
  navigateToWordLanguages() {
    this.router.navigate(['/worldLanguages']);
  }

}
