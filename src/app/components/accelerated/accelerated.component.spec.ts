import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceleratedComponent } from './accelerated.component';

describe('AcceleratedComponent', () => {
  let component: AcceleratedComponent;
  let fixture: ComponentFixture<AcceleratedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcceleratedComponent]
    });
    fixture = TestBed.createComponent(AcceleratedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
