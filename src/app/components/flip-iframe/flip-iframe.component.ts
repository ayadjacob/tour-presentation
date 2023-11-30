import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-flip-iframe',
  templateUrl: './flip-iframe.component.html',
  styleUrls: ['./flip-iframe.component.scss'],
})
export class FlipIframeComponent implements OnInit {
  @Input() projectUrl: string='';
  @Output() closeIframe = new EventEmitter<void>();
  iframeUrl: SafeResourceUrl | undefined;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.projectUrl);
  }

  onCloseIframe() {
    this.closeIframe.emit();
  }
}
