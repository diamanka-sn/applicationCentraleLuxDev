import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBonDeLivraisonComponent } from './detail-bon-de-livraison.component';

describe('DetailBonDeLivraisonComponent', () => {
  let component: DetailBonDeLivraisonComponent;
  let fixture: ComponentFixture<DetailBonDeLivraisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailBonDeLivraisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailBonDeLivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
