import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizedProgramComponent } from './customized-program.component';

describe('CustomizedProgramComponent', () => {
  let component: CustomizedProgramComponent;
  let fixture: ComponentFixture<CustomizedProgramComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomizedProgramComponent]
    });
    fixture = TestBed.createComponent(CustomizedProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
