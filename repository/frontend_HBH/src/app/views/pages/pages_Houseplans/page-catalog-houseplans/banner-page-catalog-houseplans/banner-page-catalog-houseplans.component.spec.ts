import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerPageCatalogHouseplansComponent } from './banner-page-catalog-houseplans.component';

describe('BannerPageCatalogHouseplansComponent', () => {
  let component: BannerPageCatalogHouseplansComponent;
  let fixture: ComponentFixture<BannerPageCatalogHouseplansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannerPageCatalogHouseplansComponent]
    });
    fixture = TestBed.createComponent(BannerPageCatalogHouseplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
