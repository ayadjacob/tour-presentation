import { Component, OnInit } from '@angular/core';
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
  isLinkActive(link: string): boolean {
    return this.router.url.includes(link);
  }

  isHistoricalLink(): boolean {
    return this.router.url.includes('cabeza');
  }
  isLanguageReadersLink(): boolean {
    return this.router.url.includes('languageReaders');
  }
  isUnderlined(): boolean {
    return (
      this.router.url.includes('languageReaders') ||
      this.router.url.includes('worldLanguages_dm') ||
      this.router.url.includes('worldLanguages')
    );
  }
}
