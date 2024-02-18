import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageReadersGroupComponent } from './language-readers-group.component';

describe('LanguageReadersGroupComponent', () => {
  let component: LanguageReadersGroupComponent;
  let fixture: ComponentFixture<LanguageReadersGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LanguageReadersGroupComponent]
    });
    fixture = TestBed.createComponent(LanguageReadersGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
