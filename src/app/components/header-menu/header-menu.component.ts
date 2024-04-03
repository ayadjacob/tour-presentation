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
    console.log("Current URL: ",currentUrl)
    return (
      currentUrl === '/' ||
      currentUrl === '/home' ||
      currentUrl === '/tour-presentation/historical' ||
      currentUrl === '/tour-presentation'
    );
  }
  isLinkActive(link: string): boolean {
    return this.router.url.includes(link);
  }

  isHistoricalLink(): boolean {
    return this.router.url.includes('cabeza');
  }
  isLanguageReadersLink(): boolean {
    return this.router.url === '/languageReaders';
  }
  isAcceleratedLink(): boolean {
    return this.router.url === '/accelerated';
  }


  isUnderlined(): boolean {
    return (
      this.router.url.includes('languageReaders') ||
      this.router.url.includes('worldLanguages_dm') ||
      this.router.url.includes('worldLanguages') ||
      this.router.url.includes('historical') ||
      this.router.url.includes('flip') ||
      this.router.url.includes('accelerated') 
    );
  }
}
