import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilingualMathComponent } from './bilingual-math.component';

describe('BilingualMathComponent', () => {
  let component: BilingualMathComponent;
  let fixture: ComponentFixture<BilingualMathComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BilingualMathComponent]
    });
    fixture = TestBed.createComponent(BilingualMathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
