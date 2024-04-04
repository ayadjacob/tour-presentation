import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilingualSpreadComponent } from './bilingual-spread.component';

describe('BilingualSpreadComponent', () => {
  let component: BilingualSpreadComponent;
  let fixture: ComponentFixture<BilingualSpreadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BilingualSpreadComponent]
    });
    fixture = TestBed.createComponent(BilingualSpreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
