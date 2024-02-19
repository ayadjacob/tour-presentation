import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldLangaugesDemoComponent } from './world-langauges-demo.component';

describe('WorldLangaugesDemoComponent', () => {
  let component: WorldLangaugesDemoComponent;
  let fixture: ComponentFixture<WorldLangaugesDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorldLangaugesDemoComponent]
    });
    fixture = TestBed.createComponent(WorldLangaugesDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
