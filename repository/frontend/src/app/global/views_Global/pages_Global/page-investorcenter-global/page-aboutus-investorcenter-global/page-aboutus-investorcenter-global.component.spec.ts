import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAboutusInvestorcenterGlobalComponent } from './page-aboutus-investorcenter-global.component';

describe('PageAboutusInvestorcenterGlobalComponent', () => {
  let component: PageAboutusInvestorcenterGlobalComponent;
  let fixture: ComponentFixture<PageAboutusInvestorcenterGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAboutusInvestorcenterGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageAboutusInvestorcenterGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
