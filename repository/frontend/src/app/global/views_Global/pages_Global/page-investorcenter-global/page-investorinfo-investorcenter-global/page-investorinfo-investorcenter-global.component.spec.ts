import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageInvestorinfoInvestorcenterGlobalComponent } from './page-investorinfo-investorcenter-global.component';

describe('PageInvestorinfoInvestorcenterGlobalComponent', () => {
  let component: PageInvestorinfoInvestorcenterGlobalComponent;
  let fixture: ComponentFixture<PageInvestorinfoInvestorcenterGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageInvestorinfoInvestorcenterGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageInvestorinfoInvestorcenterGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
