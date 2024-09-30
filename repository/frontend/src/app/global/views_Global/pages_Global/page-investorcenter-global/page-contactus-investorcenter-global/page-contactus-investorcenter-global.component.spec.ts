import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageContactusInvestorcenterGlobalComponent } from './page-contactus-investorcenter-global.component';

describe('PageContactusInvestorcenterGlobalComponent', () => {
  let component: PageContactusInvestorcenterGlobalComponent;
  let fixture: ComponentFixture<PageContactusInvestorcenterGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageContactusInvestorcenterGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageContactusInvestorcenterGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
