import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginOTPPage } from './login-otp.page';

describe('LoginOTPPage', () => {
  let component: LoginOTPPage;
  let fixture: ComponentFixture<LoginOTPPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginOTPPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginOTPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
