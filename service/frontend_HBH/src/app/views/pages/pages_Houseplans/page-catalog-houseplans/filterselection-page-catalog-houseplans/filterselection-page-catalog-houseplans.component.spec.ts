import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterselectionPageCatalogHouseplansComponent } from './filterselection-page-catalog-houseplans.component';

describe('FilterselectionPageCatalogHouseplansComponent', () => {
  let component: FilterselectionPageCatalogHouseplansComponent;
  let fixture: ComponentFixture<FilterselectionPageCatalogHouseplansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterselectionPageCatalogHouseplansComponent]
    });
    fixture = TestBed.createComponent(FilterselectionPageCatalogHouseplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
