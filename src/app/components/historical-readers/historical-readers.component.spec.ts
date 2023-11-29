import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalReadersComponent } from './historical-readers.component';

describe('HistoricalReadersComponent', () => {
  let component: HistoricalReadersComponent;
  let fixture: ComponentFixture<HistoricalReadersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoricalReadersComponent]
    });
    fixture = TestBed.createComponent(HistoricalReadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
