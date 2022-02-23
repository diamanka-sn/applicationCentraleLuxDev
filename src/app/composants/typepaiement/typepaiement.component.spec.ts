import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypepaiementComponent } from './typepaiement.component';

describe('TypepaiementComponent', () => {
  let component: TypepaiementComponent;
  let fixture: ComponentFixture<TypepaiementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypepaiementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypepaiementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
