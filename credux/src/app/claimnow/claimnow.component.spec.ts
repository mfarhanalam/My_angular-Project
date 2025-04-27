import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimnowComponent } from './claimnow.component';

describe('ClaimnowComponent', () => {
  let component: ClaimnowComponent;
  let fixture: ComponentFixture<ClaimnowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClaimnowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClaimnowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
