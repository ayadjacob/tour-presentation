import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageReadersFrenchComponent } from './language-readers-french.component';

describe('LanguageReadersFrenchComponent', () => {
  let component: LanguageReadersFrenchComponent;
  let fixture: ComponentFixture<LanguageReadersFrenchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LanguageReadersFrenchComponent]
    });
    fixture = TestBed.createComponent(LanguageReadersFrenchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
