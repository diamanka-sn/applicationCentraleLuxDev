import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCollaborationComponent } from './liste-collaboration.component';

describe('ListeCollaborationComponent', () => {
  let component: ListeCollaborationComponent;
  let fixture: ComponentFixture<ListeCollaborationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeCollaborationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeCollaborationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
