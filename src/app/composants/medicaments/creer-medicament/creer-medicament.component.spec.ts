import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerMedicamentComponent } from './creer-medicament.component';

describe('CreerMedicamentComponent', () => {
  let component: CreerMedicamentComponent;
  let fixture: ComponentFixture<CreerMedicamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreerMedicamentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerMedicamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
