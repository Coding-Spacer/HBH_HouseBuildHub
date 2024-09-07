import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumPageHelpGlobalComponent } from './premium-page-help-global.component';

describe('PremiumPageHelpGlobalComponent', () => {
  let component: PremiumPageHelpGlobalComponent;
  let fixture: ComponentFixture<PremiumPageHelpGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PremiumPageHelpGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PremiumPageHelpGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
