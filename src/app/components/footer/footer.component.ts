import { Component } from '@angular/core';
import { Router } from '@angular/router';
import screenfull from 'screenfull';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  isFullScreenActive: boolean = false;

  constructor(private router: Router) {}

  isHistoricalPage(): boolean {
    const currentUrl = this.router.url;
    return (
      currentUrl === '/historical' ||
      currentUrl === '/tour-presentation/historical'
    );
  }

  toggleFullScreen(): void {
    if (screenfull.isEnabled) {
      if (screenfull.isFullscreen) {
        screenfull.exit();
      } else {
        screenfull.request();
      }
      this.isFullScreenActive = !this.isFullScreenActive;
    }
  }

  getFullScreenImage(): string {
    return this.isFullScreenActive && this.isHistoricalPage()
      ? "url('../../../assets/Images/exitFullscreen_b.png')"
      : this.isFullScreenActive
      ? "url('../../../assets/Images/exitFullscreen.png')"
      : this.isHistoricalPage()
      ? "url('../../../assets/Images/fullScreen_b.png')"
      : "url('../../../assets/Images/fullScreen.png')";
  }
}
