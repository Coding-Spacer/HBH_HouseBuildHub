import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AicostestimatorProductcardPageCatalogHouseplansComponent } from './aicostestimator-productcard-page-catalog-houseplans.component';

describe('AicostestimatorProductcardPageCatalogHouseplansComponent', () => {
  let component: AicostestimatorProductcardPageCatalogHouseplansComponent;
  let fixture: ComponentFixture<AicostestimatorProductcardPageCatalogHouseplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AicostestimatorProductcardPageCatalogHouseplansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AicostestimatorProductcardPageCatalogHouseplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
