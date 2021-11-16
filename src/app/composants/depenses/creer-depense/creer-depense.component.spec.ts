import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerDepenseComponent } from './creer-depense.component';

describe('CreerDepenseComponent', () => {
  let component: CreerDepenseComponent;
  let fixture: ComponentFixture<CreerDepenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreerDepenseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerDepenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
