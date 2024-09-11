import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRealtorPartnershipGlobalComponent } from './page-realtor-partnership-global.component';

describe('PageRealtorPartnershipGlobalComponent', () => {
  let component: PageRealtorPartnershipGlobalComponent;
  let fixture: ComponentFixture<PageRealtorPartnershipGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageRealtorPartnershipGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageRealtorPartnershipGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
