import { TestBed } from '@angular/core/testing';

import { QualityClimateOldService } from './quality-climate-old.service';

describe('QualityClimateOldService', () => {
  let service: QualityClimateOldService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QualityClimateOldService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
