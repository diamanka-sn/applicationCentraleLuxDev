import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantiteMedicamentComponent } from './quantite-medicament.component';

describe('QuantiteMedicamentComponent', () => {
  let component: QuantiteMedicamentComponent;
  let fixture: ComponentFixture<QuantiteMedicamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuantiteMedicamentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantiteMedicamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
