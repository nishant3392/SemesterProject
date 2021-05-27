import { TestBed } from '@angular/core/testing';

import { ZoneService } from './zones.service';

describe('ZonesService', () => {
  let service: ZoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
