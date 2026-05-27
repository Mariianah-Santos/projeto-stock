import { TestBed } from '@angular/core/testing';

import { SolicitacionService } from './solicitacion-service';

describe('SolicitacionService', () => {
  let service: SolicitacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicitacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
