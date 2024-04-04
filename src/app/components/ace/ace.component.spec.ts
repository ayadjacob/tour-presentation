import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AceComponent } from './ace.component';

describe('AceComponent', () => {
  let component: AceComponent;
  let fixture: ComponentFixture<AceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AceComponent]
    });
    fixture = TestBed.createComponent(AceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
