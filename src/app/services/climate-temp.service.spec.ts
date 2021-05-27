import { TestBed } from '@angular/core/testing';

import { ClimateTempService } from './climate-temp.service';

describe('ClimateTempService', () => {
  let service: ClimateTempService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClimateTempService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
