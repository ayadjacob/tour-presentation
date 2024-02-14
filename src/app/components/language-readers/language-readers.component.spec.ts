import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageReadersComponent } from './language-readers.component';

describe('LanguageReadersComponent', () => {
  let component: LanguageReadersComponent;
  let fixture: ComponentFixture<LanguageReadersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LanguageReadersComponent]
    });
    fixture = TestBed.createComponent(LanguageReadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
