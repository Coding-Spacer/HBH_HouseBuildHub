import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumancostestimatorProductcardPageCatalogHouseplansComponent } from './humancostestimator-productcard-page-catalog-houseplans.component';

describe('HumancostestimatorProductcardPageCatalogHouseplansComponent', () => {
  let component: HumancostestimatorProductcardPageCatalogHouseplansComponent;
  let fixture: ComponentFixture<HumancostestimatorProductcardPageCatalogHouseplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HumancostestimatorProductcardPageCatalogHouseplansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HumancostestimatorProductcardPageCatalogHouseplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
