import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginpasswordPageHelpGlobalComponent } from './loginpassword-page-help-global.component';

describe('LoginpasswordPageHelpGlobalComponent', () => {
  let component: LoginpasswordPageHelpGlobalComponent;
  let fixture: ComponentFixture<LoginpasswordPageHelpGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginpasswordPageHelpGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginpasswordPageHelpGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
