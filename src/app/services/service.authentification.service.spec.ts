import { TestBed } from '@angular/core/testing';

import { Service.AuthentificationService } from './service.authentification.service';

describe('Service.AuthentificationService', () => {
  let service: Service.AuthentificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Service.AuthentificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
