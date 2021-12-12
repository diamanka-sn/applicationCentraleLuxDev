import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentDeffectueuxComponent } from './medicament-deffectueux.component';

describe('MedicamentDeffectueuxComponent', () => {
  let component: MedicamentDeffectueuxComponent;
  let fixture: ComponentFixture<MedicamentDeffectueuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicamentDeffectueuxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicamentDeffectueuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
