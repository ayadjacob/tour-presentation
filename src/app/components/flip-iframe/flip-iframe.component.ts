import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-flip-iframe',
  templateUrl: './flip-iframe.component.html',
  styleUrls: ['./flip-iframe.component.scss']
})
export class FlipIframeComponent {

  @Input() projectUrl: string | undefined;
  @Output() closeIframe = new EventEmitter<void>();

  onCloseIframe() {
    this.closeIframe.emit();
  }

  }
