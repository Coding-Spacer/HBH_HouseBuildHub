import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacynoticePageHelpGlobalComponent } from './privacynotice-page-help-global.component';

describe('PrivacynoticePageHelpGlobalComponent', () => {
  let component: PrivacynoticePageHelpGlobalComponent;
  let fixture: ComponentFixture<PrivacynoticePageHelpGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivacynoticePageHelpGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrivacynoticePageHelpGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
