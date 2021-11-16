import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerRayonComponent } from './creer-rayon.component';

describe('CreerRayonComponent', () => {
  let component: CreerRayonComponent;
  let fixture: ComponentFixture<CreerRayonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreerRayonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerRayonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
