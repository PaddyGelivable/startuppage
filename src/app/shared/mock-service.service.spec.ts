import { TestBed } from '@angular/core/testing';

import { MockServiceService } from './mock-service.service';

describe('MockServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockServiceService = TestBed.get(MockServiceService);
    expect(service).toBeTruthy();
  });
});
