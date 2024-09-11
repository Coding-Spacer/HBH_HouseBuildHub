import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSupplierPartnershipGlobalComponent } from './page-supplier-partnership-global.component';

describe('PageSupplierPartnershipGlobalComponent', () => {
  let component: PageSupplierPartnershipGlobalComponent;
  let fixture: ComponentFixture<PageSupplierPartnershipGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageSupplierPartnershipGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageSupplierPartnershipGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
