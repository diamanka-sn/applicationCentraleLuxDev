import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeBonDeLivraisonComponent } from './liste-bon-de-livraison.component';

describe('ListeBonDeLivraisonComponent', () => {
  let component: ListeBonDeLivraisonComponent;
  let fixture: ComponentFixture<ListeBonDeLivraisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeBonDeLivraisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeBonDeLivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
