import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodegoegraphiqueComponent } from './codegoegraphique.component';

describe('CodegoegraphiqueComponent', () => {
  let component: CodegoegraphiqueComponent;
  let fixture: ComponentFixture<CodegoegraphiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodegoegraphiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodegoegraphiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
