import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtsAndHumanitiesComponent } from './arts-and-humanities.component';

describe('ArtsAndHumanitiesComponent', () => {
  let component: ArtsAndHumanitiesComponent;
  let fixture: ComponentFixture<ArtsAndHumanitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtsAndHumanitiesComponent]
    });
    fixture = TestBed.createComponent(ArtsAndHumanitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
