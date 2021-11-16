import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerBonclientComponent } from './creer-bonclient.component';

describe('CreerBonclientComponent', () => {
  let component: CreerBonclientComponent;
  let fixture: ComponentFixture<CreerBonclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreerBonclientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerBonclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
