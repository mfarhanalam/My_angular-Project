import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressStepComponent } from './progress-step.component';

describe('ProgressStepComponent', () => {
  let component: ProgressStepComponent;
  let fixture: ComponentFixture<ProgressStepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressStepComponent]
    });
    fixture = TestBed.createComponent(ProgressStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
