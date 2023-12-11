import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilingualComponent } from './bilingual.component';

describe('BilingualComponent', () => {
  let component: BilingualComponent;
  let fixture: ComponentFixture<BilingualComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BilingualComponent]
    });
    fixture = TestBed.createComponent(BilingualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
