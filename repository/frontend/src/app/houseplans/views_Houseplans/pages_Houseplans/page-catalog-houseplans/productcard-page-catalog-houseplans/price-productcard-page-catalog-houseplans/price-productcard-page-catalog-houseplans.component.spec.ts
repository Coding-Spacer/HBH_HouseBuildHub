import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceProductcardPageCatalogHouseplansComponent } from './price-productcard-page-catalog-houseplans.component';

describe('PriceProductcardPageCatalogHouseplansComponent', () => {
  let component: PriceProductcardPageCatalogHouseplansComponent;
  let fixture: ComponentFixture<PriceProductcardPageCatalogHouseplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriceProductcardPageCatalogHouseplansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PriceProductcardPageCatalogHouseplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
