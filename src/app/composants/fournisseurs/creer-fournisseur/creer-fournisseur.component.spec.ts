import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerFournisseurComponent } from './creer-fournisseur.component';

describe('CreerFournisseurComponent', () => {
  let component: CreerFournisseurComponent;
  let fixture: ComponentFixture<CreerFournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreerFournisseurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
