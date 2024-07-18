import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAccountSecurityGlobalComponent } from './page-account-security-global.component';

describe('PageAccountSecurityGlobalComponent', () => {
  let component: PageAccountSecurityGlobalComponent;
  let fixture: ComponentFixture<PageAccountSecurityGlobalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageAccountSecurityGlobalComponent]
    });
    fixture = TestBed.createComponent(PageAccountSecurityGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
