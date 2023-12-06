import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import screenfull from 'screenfull';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  isFullScreenActive: boolean = false;
  isMusicPlaying: boolean = true;
  audio: HTMLAudioElement = new Audio(); // Declare class-level Audio object

  constructor(private router: Router) {}

  @HostListener('document:fullscreenchange', ['$event'])
  onFullscreenChange(event: Event): void {
    this.isFullScreenActive = screenfull.isFullscreen;
  }

  ngOnInit(): void {
    this.playMusic(); // Play music on component initialization
  }

  playMusic(): void {
    this.audio.src = 'assets/Music/Music.mp3'; // Replace with the actual path to your MP3 file
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
    // Add logic to play or stop the music here
    this.isMusicPlaying = !this.isMusicPlaying;

    // You can add your music playing logic here based on this.isMusicPlaying
    if (this.isMusicPlaying) {
      this.playMusic();
    } else {
      this.audio.pause();
      this.audio.currentTime = 0;
      // Play music when toggling it on
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
