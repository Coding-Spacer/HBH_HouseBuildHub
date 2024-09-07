import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityPageHelpGlobalComponent } from './security-page-help-global.component';

describe('SecurityPageHelpGlobalComponent', () => {
  let component: SecurityPageHelpGlobalComponent;
  let fixture: ComponentFixture<SecurityPageHelpGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecurityPageHelpGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecurityPageHelpGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
