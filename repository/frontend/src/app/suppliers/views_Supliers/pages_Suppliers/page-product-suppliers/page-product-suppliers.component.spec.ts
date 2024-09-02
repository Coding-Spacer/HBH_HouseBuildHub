import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProductSuppliersComponent } from './page-product-suppliers.component';

describe('PageProductSuppliersComponent', () => {
  let component: PageProductSuppliersComponent;
  let fixture: ComponentFixture<PageProductSuppliersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageProductSuppliersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageProductSuppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
