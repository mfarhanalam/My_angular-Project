import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostalBankAccountComponent } from './postal-bank-account.component';

describe('PostalBankAccountComponent', () => {
  let component: PostalBankAccountComponent;
  let fixture: ComponentFixture<PostalBankAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostalBankAccountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostalBankAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
