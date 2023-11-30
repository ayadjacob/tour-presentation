import { Component } from '@angular/core';

@Component({
  selector: 'app-historical-readers',
  templateUrl: './historical-readers.component.html',
  styleUrls: ['./historical-readers.component.scss'],
})
export class HistoricalReadersComponent {
  showIframe: boolean = false;

  openIframe() {
    this.showIframe = !this.showIframe;
  }
}
