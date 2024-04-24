import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss'],
})
export class HeaderMenuComponent {
  constructor(private router: Router) {}

  isHomePage(): boolean {
    const currentUrl = this.router.url;
    console.log('Current URL: ', currentUrl);
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

  isAccelerated_M_Link(): boolean {
    return this.router.url === '/accelerated-m';
  }

  isEnglishForAdultsLink(): boolean {
    return this.router.url === '/englishForAdults';
  }

  isCustomizedLink(): boolean {
    return this.router.url === '/customizedProgram';
  }
  isAceLink(): boolean {
    return this.router.url === '/ace';
  }

  isUnderlined(): boolean {
    const currentUrl = this.router.url;
    return (
      this.router.url.includes('languageReaders') ||
      this.router.url.includes('worldLanguages_dm') ||
      this.router.url.includes('worldLanguages') ||
      this.router.url.includes('historical') ||
      this.router.url.includes('flip') ||
      this.router.url.includes('englishForAdults') ||
      currentUrl === '/accelerated' ||
      this.router.url.includes('isMath=false')
    );
  }

  isUnderlined_math(): boolean {
    const currentUrl = this.router.url;
    return (
      this.router.url.includes('mathAndscience') ||
      this.router.url.includes('ace') ||
      this.router.url.includes('customizedProgram') ||
      currentUrl === '/accelerated-m' ||
      currentUrl === '/worldLanguages_dm?selectedProject=Math' ||
      this.router.url.includes('isMath=true')
    );
  }

  isUnderlined_artsAndHumanities(): boolean {
    const currentUrl = this.router.url;
    return currentUrl === '/art' || currentUrl === '/music' || currentUrl === '/artsAndHumanities';
  }
}
