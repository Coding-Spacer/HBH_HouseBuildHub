import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOurgoalsInvestorcenterGlobalComponent } from './page-ourgoals-investorcenter-global.component';

describe('PageOurgoalsInvestorcenterGlobalComponent', () => {
  let component: PageOurgoalsInvestorcenterGlobalComponent;
  let fixture: ComponentFixture<PageOurgoalsInvestorcenterGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageOurgoalsInvestorcenterGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageOurgoalsInvestorcenterGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
