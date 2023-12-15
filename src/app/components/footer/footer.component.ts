import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import screenfull from 'screenfull';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  isFullScreenActive: boolean = false;
  isMusicPlaying: boolean = false;
  audio: HTMLAudioElement = new Audio(); // Declare class-level Audio object

  constructor(private router: Router) { }

  @HostListener('document:fullscreenchange', ['$event'])
  onFullscreenChange(event: Event): void {
    this.isFullScreenActive = screenfull.isFullscreen;
  }


  playMusic(volume: number = 0.3): void {
    console.log('Play music called');
    this.audio.src = 'assets/Music/Music.mp3';
    this.audio.volume = volume;
    this.audio.loop = true;
    this.audio.play();
  }

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

  toggleMusic(): void {
    this.isMusicPlaying = !this.isMusicPlaying;
  
    // Adjust volume based on whether music is playing or not
    const volume = this.isMusicPlaying ? 0.3 : 0.0;
  
    if (this.isMusicPlaying) {
      this.playMusic(volume);
    } else {
      this.audio.pause();
      this.audio.currentTime = 0;
    }
  }



  getFullScreenImage(): string {
    return this.isFullScreenActive && this.isHistoricalPage()
      ? "url('assets/Images/exitFullscreen_b.png')"
      : this.isFullScreenActive
      ? "url('assets/Images/exitFullscreen.png')"
      : this.isHistoricalPage()
      ? "url('assets/Images/fullScreen_b.png')"
      : "url('assets/Images/fullScreen.png')";
  }
}
