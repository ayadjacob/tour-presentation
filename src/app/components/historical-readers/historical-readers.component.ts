import { AfterViewInit, Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-historical-readers',
  templateUrl: './historical-readers.component.html',
  styleUrls: ['./historical-readers.component.scss'],
})
export class HistoricalReadersComponent implements AfterViewInit {

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngAfterViewInit() {
    this.onViewportChange(); // Call the function initially

    // Optional: You can use this to trigger the function when the component is initially created
    // setTimeout(() => this.onViewportChange());
  }

  @HostListener('window:resize', ['$event'])
  onViewportChange(event?: Event) {
    // Get the element by class name
    const coverContainer = this.el.nativeElement.querySelector('.cover-container');

    // Check if the element is found
    if (coverContainer) {
      // Get the width and height of the div
      const width = coverContainer.offsetWidth;
      const height = coverContainer.offsetHeight;

      // Show the width and height (you can replace this with any logic you need)
      console.log('Width:', width, 'Height:', height);

      // Alternatively, you can update the content of a property in your component
      // For example, if you have a property named 'dimensions'
      // this.dimensions = { width, height };
    }
  }
}