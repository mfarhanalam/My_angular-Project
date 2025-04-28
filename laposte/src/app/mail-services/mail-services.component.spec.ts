import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailServicesComponent } from './mail-services.component';

describe('MailServicesComponent', () => {
  let component: MailServicesComponent;
  let fixture: ComponentFixture<MailServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MailServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
