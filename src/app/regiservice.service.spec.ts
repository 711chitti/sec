import { TestBed } from '@angular/core/testing';

import { RegiserviceService } from './regiservice.service';

describe('RegiserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegiserviceService = TestBed.get(RegiserviceService);
    expect(service).toBeTruthy();
  });
});
