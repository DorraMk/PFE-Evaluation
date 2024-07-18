import { TestBed } from '@angular/core/testing';

import { HiearchieService } from './hiearchie.service';

describe('HiearchieService', () => {
  let service: HiearchieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HiearchieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
