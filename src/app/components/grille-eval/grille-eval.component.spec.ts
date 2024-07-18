import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrilleEvalComponent } from './grille-eval.component';

describe('GrilleEvalComponent', () => {
  let component: GrilleEvalComponent;
  let fixture: ComponentFixture<GrilleEvalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrilleEvalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrilleEvalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
