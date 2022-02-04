import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrediterSoldeComponent } from './crediter-solde.component';

describe('CrediterSoldeComponent', () => {
  let component: CrediterSoldeComponent;
  let fixture: ComponentFixture<CrediterSoldeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrediterSoldeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrediterSoldeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
