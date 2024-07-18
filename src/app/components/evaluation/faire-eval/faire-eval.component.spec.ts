import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaireEvalComponent } from './faire-eval.component';

describe('FaireEvalComponent', () => {
  let component: FaireEvalComponent;
  let fixture: ComponentFixture<FaireEvalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FaireEvalComponent]
    });
    fixture = TestBed.createComponent(FaireEvalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
