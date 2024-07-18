import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingPageCatalogHouseplansComponent } from './sorting-page-catalog-houseplans.component';

describe('SortingPageCatalogHouseplansComponent', () => {
  let component: SortingPageCatalogHouseplansComponent;
  let fixture: ComponentFixture<SortingPageCatalogHouseplansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SortingPageCatalogHouseplansComponent]
    });
    fixture = TestBed.createComponent(SortingPageCatalogHouseplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
