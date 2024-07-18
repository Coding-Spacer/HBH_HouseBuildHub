import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationCenterHeaderGlobalComponent } from './registration-center-header-global.component';

describe('RegistrationCenterHeaderGlobalComponent', () => {
  let component: RegistrationCenterHeaderGlobalComponent;
  let fixture: ComponentFixture<RegistrationCenterHeaderGlobalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationCenterHeaderGlobalComponent]
    });
    fixture = TestBed.createComponent(RegistrationCenterHeaderGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
