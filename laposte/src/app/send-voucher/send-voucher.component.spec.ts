import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendVoucherComponent } from './send-voucher.component';

describe('SendVoucherComponent', () => {
  let component: SendVoucherComponent;
  let fixture: ComponentFixture<SendVoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SendVoucherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
