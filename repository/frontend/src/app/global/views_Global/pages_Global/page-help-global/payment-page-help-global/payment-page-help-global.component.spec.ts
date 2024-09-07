import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentPageHelpGlobalComponent } from './payment-page-help-global.component';

describe('PaymentPageHelpGlobalComponent', () => {
  let component: PaymentPageHelpGlobalComponent;
  let fixture: ComponentFixture<PaymentPageHelpGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentPageHelpGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaymentPageHelpGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
