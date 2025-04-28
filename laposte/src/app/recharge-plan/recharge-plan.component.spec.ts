import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechargePlanComponent } from './recharge-plan.component';

describe('RechargePlanComponent', () => {
  let component: RechargePlanComponent;
  let fixture: ComponentFixture<RechargePlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RechargePlanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechargePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
