import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageInvestorcenterGlobalComponent } from './page-investorcenter-global.component';

describe('PageInvestorcenterGlobalComponent', () => {
  let component: PageInvestorcenterGlobalComponent;
  let fixture: ComponentFixture<PageInvestorcenterGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageInvestorcenterGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageInvestorcenterGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
