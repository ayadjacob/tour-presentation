import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceleratedSliderComponent } from './accelerated-slider.component';

describe('AcceleratedSliderComponent', () => {
  let component: AcceleratedSliderComponent;
  let fixture: ComponentFixture<AcceleratedSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcceleratedSliderComponent]
    });
    fixture = TestBed.createComponent(AcceleratedSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
