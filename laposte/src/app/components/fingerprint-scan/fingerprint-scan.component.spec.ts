import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FingerprintScanComponent } from './fingerprint-scan.component';

describe('FingerprintScanComponent', () => {
  let component: FingerprintScanComponent;
  let fixture: ComponentFixture<FingerprintScanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FingerprintScanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FingerprintScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
