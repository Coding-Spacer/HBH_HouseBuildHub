import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninSelectFooterGlobalComponent } from './signin-select-footer-global.component';

describe('SigninSelectFooterGlobalComponent', () => {
  let component: SigninSelectFooterGlobalComponent;
  let fixture: ComponentFixture<SigninSelectFooterGlobalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SigninSelectFooterGlobalComponent]
    });
    fixture = TestBed.createComponent(SigninSelectFooterGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
