import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss'],
})
export class HeaderMenuComponent {
  constructor(private router: Router) {}

  isHomePage(): boolean {
    const currentUrl = this.router.url;
    return (
      currentUrl === '/home' || currentUrl === '/tour-presentation/historical'
    );
  }
}
