import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductcardPageCatalogHouseplansComponent } from './productcard-page-catalog-houseplans.component';

describe('ProductcardPageCatalogHouseplansComponent', () => {
  let component: ProductcardPageCatalogHouseplansComponent;
  let fixture: ComponentFixture<ProductcardPageCatalogHouseplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductcardPageCatalogHouseplansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductcardPageCatalogHouseplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
