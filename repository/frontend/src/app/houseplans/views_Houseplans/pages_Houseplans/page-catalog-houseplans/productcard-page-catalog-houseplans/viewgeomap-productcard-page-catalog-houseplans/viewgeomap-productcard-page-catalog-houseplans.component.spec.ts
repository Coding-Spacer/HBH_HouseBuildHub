import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewgeomapProductcardPageCatalogHouseplansComponent } from './viewgeomap-productcard-page-catalog-houseplans.component';

describe('ViewgeomapProductcardPageCatalogHouseplansComponent', () => {
  let component: ViewgeomapProductcardPageCatalogHouseplansComponent;
  let fixture: ComponentFixture<ViewgeomapProductcardPageCatalogHouseplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewgeomapProductcardPageCatalogHouseplansComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      ViewgeomapProductcardPageCatalogHouseplansComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
