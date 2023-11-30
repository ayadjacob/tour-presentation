import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipIframeComponent } from './flip-iframe.component';

describe('FlipIframeComponent', () => {
  let component: FlipIframeComponent;
  let fixture: ComponentFixture<FlipIframeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlipIframeComponent]
    });
    fixture = TestBed.createComponent(FlipIframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
