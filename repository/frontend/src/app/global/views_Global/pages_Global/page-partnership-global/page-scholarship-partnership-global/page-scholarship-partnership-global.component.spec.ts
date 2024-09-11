import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageScholarshipPartnershipGlobalComponent } from './page-scholarship-partnership-global.component';

describe('PageScholarshipPartnershipGlobalComponent', () => {
  let component: PageScholarshipPartnershipGlobalComponent;
  let fixture: ComponentFixture<PageScholarshipPartnershipGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageScholarshipPartnershipGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageScholarshipPartnershipGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
