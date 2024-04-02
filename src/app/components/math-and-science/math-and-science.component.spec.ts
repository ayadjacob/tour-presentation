import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathAndScienceComponent } from './math-and-science.component';

describe('MathAndScienceComponent', () => {
  let component: MathAndScienceComponent;
  let fixture: ComponentFixture<MathAndScienceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MathAndScienceComponent]
    });
    fixture = TestBed.createComponent(MathAndScienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
