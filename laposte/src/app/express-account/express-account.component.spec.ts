import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpressAccountComponent } from './express-account.component';

describe('ExpressAccountComponent', () => {
  let component: ExpressAccountComponent;
  let fixture: ComponentFixture<ExpressAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpressAccountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpressAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
