import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerBonDeLivraisonComponent } from './creer-bon-de-livraison.component';

describe('CreerBonDeLivraisonComponent', () => {
  let component: CreerBonDeLivraisonComponent;
  let fixture: ComponentFixture<CreerBonDeLivraisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreerBonDeLivraisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerBonDeLivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
