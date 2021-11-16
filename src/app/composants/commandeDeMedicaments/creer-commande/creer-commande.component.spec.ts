import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerCommandeComponent } from './creer-commande.component';

describe('CreerCommandeComponent', () => {
  let component: CreerCommandeComponent;
  let fixture: ComponentFixture<CreerCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreerCommandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
