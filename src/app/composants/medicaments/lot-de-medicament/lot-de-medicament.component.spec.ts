import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LotDeMedicamentComponent } from './lot-de-medicament.component';

describe('LotDeMedicamentComponent', () => {
  let component: LotDeMedicamentComponent;
  let fixture: ComponentFixture<LotDeMedicamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LotDeMedicamentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LotDeMedicamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
