import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatnerComponent } from './patner.component';

describe('PatnerComponent', () => {
  let component: PatnerComponent;
  let fixture: ComponentFixture<PatnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
