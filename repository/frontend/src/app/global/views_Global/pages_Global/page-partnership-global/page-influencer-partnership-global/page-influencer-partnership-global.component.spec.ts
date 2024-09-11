import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageInfluencerPartnershipGlobalComponent } from './page-influencer-partnership-global.component';

describe('PageInfluencerPartnershipGlobalComponent', () => {
  let component: PageInfluencerPartnershipGlobalComponent;
  let fixture: ComponentFixture<PageInfluencerPartnershipGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageInfluencerPartnershipGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageInfluencerPartnershipGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
