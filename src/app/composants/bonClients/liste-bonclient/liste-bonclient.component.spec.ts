import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeBonclientComponent } from './liste-bonclient.component';

describe('ListeBonclientComponent', () => {
  let component: ListeBonclientComponent;
  let fixture: ComponentFixture<ListeBonclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeBonclientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeBonclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
