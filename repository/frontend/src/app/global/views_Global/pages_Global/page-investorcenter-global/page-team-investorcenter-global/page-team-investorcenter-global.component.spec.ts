import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTeamInvestorcenterGlobalComponent } from './page-team-investorcenter-global.component';

describe('PageTeamInvestorcenterGlobalComponent', () => {
  let component: PageTeamInvestorcenterGlobalComponent;
  let fixture: ComponentFixture<PageTeamInvestorcenterGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageTeamInvestorcenterGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageTeamInvestorcenterGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
