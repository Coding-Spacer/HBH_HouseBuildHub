import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageInvestmenttermsInvestorcenterGlobalComponent } from './page-investmentterms-investorcenter-global.component';

describe('PageInvestmenttermsInvestorcenterGlobalComponent', () => {
  let component: PageInvestmenttermsInvestorcenterGlobalComponent;
  let fixture: ComponentFixture<PageInvestmenttermsInvestorcenterGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageInvestmenttermsInvestorcenterGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageInvestmenttermsInvestorcenterGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
