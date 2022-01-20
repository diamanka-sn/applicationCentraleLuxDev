import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebiterSoldeComponent } from './debiter-solde.component';

describe('DebiterSoldeComponent', () => {
  let component: DebiterSoldeComponent;
  let fixture: ComponentFixture<DebiterSoldeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebiterSoldeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DebiterSoldeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
