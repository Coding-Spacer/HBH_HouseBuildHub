import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductfilterleftpanelPageCatalogHouseplansComponent } from './productfilterleftpanel-page-catalog-houseplans.component';

describe('ProductfilterleftpanelPageCatalogHouseplansComponent', () => {
  let component: ProductfilterleftpanelPageCatalogHouseplansComponent;
  let fixture: ComponentFixture<ProductfilterleftpanelPageCatalogHouseplansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductfilterleftpanelPageCatalogHouseplansComponent]
    });
    fixture = TestBed.createComponent(ProductfilterleftpanelPageCatalogHouseplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
