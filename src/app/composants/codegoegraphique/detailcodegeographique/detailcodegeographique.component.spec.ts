import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailcodegeographiqueComponent } from './detailcodegeographique.component';

describe('DetailcodegeographiqueComponent', () => {
  let component: DetailcodegeographiqueComponent;
  let fixture: ComponentFixture<DetailcodegeographiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailcodegeographiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailcodegeographiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
