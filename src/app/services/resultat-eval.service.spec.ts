import { TestBed } from '@angular/core/testing';

import { ResultatEvalService } from './resultat-eval.service';

describe('ResultatEvalService', () => {
  let service: ResultatEvalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResultatEvalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
