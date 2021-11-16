import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerVenteComponent } from './creer-vente.component';

describe('CreerVenteComponent', () => {
  let component: CreerVenteComponent;
  let fixture: ComponentFixture<CreerVenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreerVenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerVenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
