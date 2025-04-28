import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyBiometricComponent } from './verify-biometric.component';

describe('VerifyBiometricComponent', () => {
  let component: VerifyBiometricComponent;
  let fixture: ComponentFixture<VerifyBiometricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerifyBiometricComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifyBiometricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
