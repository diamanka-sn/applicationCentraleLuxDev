import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentPerimesComponent } from './medicament-perimes.component';

describe('MedicamentPerimesComponent', () => {
  let component: MedicamentPerimesComponent;
  let fixture: ComponentFixture<MedicamentPerimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicamentPerimesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicamentPerimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
