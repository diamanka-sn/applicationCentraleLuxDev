import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauDepensesComponent } from './tableau-depenses.component';

describe('TableauDepensesComponent', () => {
  let component: TableauDepensesComponent;
  let fixture: ComponentFixture<TableauDepensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableauDepensesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauDepensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
