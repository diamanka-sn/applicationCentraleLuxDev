import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerFactureComponent } from './creer-facture.component';

describe('CreerFactureComponent', () => {
  let component: CreerFactureComponent;
  let fixture: ComponentFixture<CreerFactureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreerFactureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerFactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
