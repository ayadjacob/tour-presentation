import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageReadersArabicComponent } from './language-readers-arabic.component';

describe('LanguageReadersArabicComponent', () => {
  let component: LanguageReadersArabicComponent;
  let fixture: ComponentFixture<LanguageReadersArabicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LanguageReadersArabicComponent]
    });
    fixture = TestBed.createComponent(LanguageReadersArabicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
