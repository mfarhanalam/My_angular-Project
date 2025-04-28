import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilepaymentComponent } from './mobilepayment.component';

describe('MobilepaymentComponent', () => {
  let component: MobilepaymentComponent;
  let fixture: ComponentFixture<MobilepaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MobilepaymentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobilepaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
