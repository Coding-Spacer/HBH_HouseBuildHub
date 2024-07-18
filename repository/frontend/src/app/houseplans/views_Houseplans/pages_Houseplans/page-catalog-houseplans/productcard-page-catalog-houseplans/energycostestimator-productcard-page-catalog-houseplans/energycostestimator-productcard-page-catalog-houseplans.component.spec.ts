import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergycostestimatorProductcardPageCatalogHouseplansComponent } from './energycostestimator-productcard-page-catalog-houseplans.component';

describe('EnergycostestimatorProductcardPageCatalogHouseplansComponent', () => {
  let component: EnergycostestimatorProductcardPageCatalogHouseplansComponent;
  let fixture: ComponentFixture<EnergycostestimatorProductcardPageCatalogHouseplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnergycostestimatorProductcardPageCatalogHouseplansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnergycostestimatorProductcardPageCatalogHouseplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
