import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerCollaborationComponent } from './creer-collaboration.component';

describe('CreerCollaborationComponent', () => {
  let component: CreerCollaborationComponent;
  let fixture: ComponentFixture<CreerCollaborationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreerCollaborationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerCollaborationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
