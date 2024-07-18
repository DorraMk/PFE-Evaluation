import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionEvalComponent } from './session-eval.component';

describe('SessionEvalComponent', () => {
  let component: SessionEvalComponent;
  let fixture: ComponentFixture<SessionEvalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SessionEvalComponent]
    });
    fixture = TestBed.createComponent(SessionEvalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
