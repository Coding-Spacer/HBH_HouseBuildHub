import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageVisitorsPartnershipGlobalComponent } from './page-visitors-partnership-global.component';

describe('PageVisitorsPartnershipGlobalComponent', () => {
  let component: PageVisitorsPartnershipGlobalComponent;
  let fixture: ComponentFixture<PageVisitorsPartnershipGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageVisitorsPartnershipGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageVisitorsPartnershipGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
