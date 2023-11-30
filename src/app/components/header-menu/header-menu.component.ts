import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent {

  constructor(private router: Router) { }

  isHomePage(): boolean {
    return this.router.url === '/home';
  }

}
