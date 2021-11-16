import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCollaborationComponent } from './detail-collaboration.component';

describe('DetailCollaborationComponent', () => {
  let component: DetailCollaborationComponent;
  let fixture: ComponentFixture<DetailCollaborationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCollaborationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCollaborationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
