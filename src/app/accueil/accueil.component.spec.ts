import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilComponentAppApp } from './accueil.component';

describe('AccueilComponentApp', () => {
  let component: AccueilComponentAppApp;
  let fixture: ComponentFixture<AccueilComponentAppApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccueilComponentAppApp]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilComponentAppApp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
