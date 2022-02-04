import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartVentesComponent } from './chart-ventes.component';

describe('ChartVentesComponent', () => {
  let component: ChartVentesComponent;
  let fixture: ComponentFixture<ChartVentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartVentesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartVentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
