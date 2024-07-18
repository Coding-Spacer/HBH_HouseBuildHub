import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayviewsPageCatalogHouseplansComponent } from './displayviews-page-catalog-houseplans.component';

describe('DisplayviewsPageCatalogHouseplansComponent', () => {
  let component: DisplayviewsPageCatalogHouseplansComponent;
  let fixture: ComponentFixture<DisplayviewsPageCatalogHouseplansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayviewsPageCatalogHouseplansComponent]
    });
    fixture = TestBed.createComponent(DisplayviewsPageCatalogHouseplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
