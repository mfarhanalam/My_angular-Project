import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepaidcardComponent } from './prepaidcard.component';

describe('PrepaidcardComponent', () => {
  let component: PrepaidcardComponent;
  let fixture: ComponentFixture<PrepaidcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrepaidcardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrepaidcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
