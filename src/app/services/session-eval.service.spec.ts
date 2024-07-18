import { TestBed } from '@angular/core/testing';

import { SessionEvalService } from './session-eval.service';

describe('SessionEvalService', () => {
  let service: SessionEvalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionEvalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
