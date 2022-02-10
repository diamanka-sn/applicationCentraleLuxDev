import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListecodegeographiqueComponent } from './listecodegeographique.component';

describe('ListecodegeographiqueComponent', () => {
  let component: ListecodegeographiqueComponent;
  let fixture: ComponentFixture<ListecodegeographiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListecodegeographiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListecodegeographiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
