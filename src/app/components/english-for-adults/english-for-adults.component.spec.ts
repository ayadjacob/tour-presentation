import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishForAdultsComponent } from './english-for-adults.component';

describe('EnglishForAdultsComponent', () => {
  let component: EnglishForAdultsComponent;
  let fixture: ComponentFixture<EnglishForAdultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnglishForAdultsComponent]
    });
    fixture = TestBed.createComponent(EnglishForAdultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
