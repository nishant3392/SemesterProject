import { TestBed } from '@angular/core/testing';

import { QualityClimateNewService } from './quality-climate-new.service';

describe('QualityClimateNewService', () => {
  let service: QualityClimateNewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QualityClimateNewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
