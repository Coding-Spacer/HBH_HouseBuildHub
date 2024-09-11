import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePermitterPartnershipGlobalComponent } from './page-permitter-partnership-global.component';

describe('PagePermitterPartnershipGlobalComponent', () => {
  let component: PagePermitterPartnershipGlobalComponent;
  let fixture: ComponentFixture<PagePermitterPartnershipGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagePermitterPartnershipGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagePermitterPartnershipGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
