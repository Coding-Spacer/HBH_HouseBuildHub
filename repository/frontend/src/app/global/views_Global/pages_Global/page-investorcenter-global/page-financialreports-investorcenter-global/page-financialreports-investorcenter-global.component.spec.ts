import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFinancialreportsInvestorcenterGlobalComponent } from './page-financialreports-investorcenter-global.component';

describe('PageFinancialreportsInvestorcenterGlobalComponent', () => {
  let component: PageFinancialreportsInvestorcenterGlobalComponent;
  let fixture: ComponentFixture<PageFinancialreportsInvestorcenterGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageFinancialreportsInvestorcenterGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageFinancialreportsInvestorcenterGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
