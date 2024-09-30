import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProjectsforinvestmentInvestorcenterGlobalComponent } from './page-projectsforinvestment-investorcenter-global.component';

describe('PageProjectsforinvestmentInvestorcenterGlobalComponent', () => {
  let component: PageProjectsforinvestmentInvestorcenterGlobalComponent;
  let fixture: ComponentFixture<PageProjectsforinvestmentInvestorcenterGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageProjectsforinvestmentInvestorcenterGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageProjectsforinvestmentInvestorcenterGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
