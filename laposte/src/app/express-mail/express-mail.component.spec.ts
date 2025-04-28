import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpressMailComponent } from './express-mail.component';

describe('ExpressMailComponent', () => {
  let component: ExpressMailComponent;
  let fixture: ComponentFixture<ExpressMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpressMailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpressMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
