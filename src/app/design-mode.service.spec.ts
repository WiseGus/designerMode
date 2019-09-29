import { TestBed } from '@angular/core/testing';

import { DesignModeService } from './design-mode.service';

describe('DesignModeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DesignModeService = TestBed.get(DesignModeService);
    expect(service).toBeTruthy();
  });
});
