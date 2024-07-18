import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultatEvalComponent } from './resultat-eval.component';

describe('ResultatEvalComponent', () => {
  let component: ResultatEvalComponent;
  let fixture: ComponentFixture<ResultatEvalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultatEvalComponent]
    });
    fixture = TestBed.createComponent(ResultatEvalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
