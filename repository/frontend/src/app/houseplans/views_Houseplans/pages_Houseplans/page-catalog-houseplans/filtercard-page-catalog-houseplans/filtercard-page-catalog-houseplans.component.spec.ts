import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltercardPageCatalogHouseplansComponent } from './filtercard-page-catalog-houseplans.component';

describe('FiltercardPageCatalogHouseplansComponent', () => {
  let component: FiltercardPageCatalogHouseplansComponent;
  let fixture: ComponentFixture<FiltercardPageCatalogHouseplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltercardPageCatalogHouseplansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FiltercardPageCatalogHouseplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
