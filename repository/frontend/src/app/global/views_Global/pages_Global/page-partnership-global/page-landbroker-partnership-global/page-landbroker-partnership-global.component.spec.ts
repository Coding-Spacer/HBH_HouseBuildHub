import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLandbrokerPartnershipGlobalComponent } from './page-landbroker-partnership-global.component';

describe('PageLandbrokerPartnershipGlobalComponent', () => {
  let component: PageLandbrokerPartnershipGlobalComponent;
  let fixture: ComponentFixture<PageLandbrokerPartnershipGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageLandbrokerPartnershipGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageLandbrokerPartnershipGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
