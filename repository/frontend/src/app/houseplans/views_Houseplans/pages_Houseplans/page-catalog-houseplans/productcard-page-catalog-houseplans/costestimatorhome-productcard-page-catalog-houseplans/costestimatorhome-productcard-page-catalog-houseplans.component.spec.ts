import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostestimatorhomeProductcardPageCatalogHouseplansComponent } from './costestimatorhome-productcard-page-catalog-houseplans.component';

describe('СostestimatorhomeProductcardPageCatalogHouseplansComponent', () => {
  let component: СostestimatorhomeProductcardPageCatalogHouseplansComponent;
  let fixture: ComponentFixture<СostestimatorhomeProductcardPageCatalogHouseplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [СostestimatorhomeProductcardPageCatalogHouseplansComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      СostestimatorhomeProductcardPageCatalogHouseplansComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
