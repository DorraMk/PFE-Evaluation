import { TestBed } from '@angular/core/testing';

import { GrilleEvalService } from './grille-eval.service';

describe('GrilleEvalService', () => {
  let service: GrilleEvalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrilleEvalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
