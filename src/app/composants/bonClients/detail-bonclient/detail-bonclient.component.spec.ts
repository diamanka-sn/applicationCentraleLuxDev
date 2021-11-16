import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBonclientComponent } from './detail-bonclient.component';

describe('DetailBonclientComponent', () => {
  let component: DetailBonclientComponent;
  let fixture: ComponentFixture<DetailBonclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailBonclientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailBonclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
