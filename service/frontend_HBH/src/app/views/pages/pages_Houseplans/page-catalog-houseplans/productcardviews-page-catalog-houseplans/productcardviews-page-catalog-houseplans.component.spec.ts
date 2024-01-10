import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductcardviewsPageCatalogHouseplansComponent } from './productcardviews-page-catalog-houseplans.component';

describe('ProductcardviewsPageCatalogHouseplansComponent', () => {
  let component: ProductcardviewsPageCatalogHouseplansComponent;
  let fixture: ComponentFixture<ProductcardviewsPageCatalogHouseplansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductcardviewsPageCatalogHouseplansComponent]
    });
    fixture = TestBed.createComponent(ProductcardviewsPageCatalogHouseplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
