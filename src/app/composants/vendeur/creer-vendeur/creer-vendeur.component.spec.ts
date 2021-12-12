import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerVendeurComponent } from './creer-vendeur.component';

describe('CreerVendeurComponent', () => {
  let component: CreerVendeurComponent;
  let fixture: ComponentFixture<CreerVendeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreerVendeurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerVendeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
