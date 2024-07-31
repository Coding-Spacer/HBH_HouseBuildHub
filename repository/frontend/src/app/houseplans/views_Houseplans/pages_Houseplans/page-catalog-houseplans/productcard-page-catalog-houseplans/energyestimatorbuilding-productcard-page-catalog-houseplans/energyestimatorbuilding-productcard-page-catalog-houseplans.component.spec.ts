import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyestimatorbuildingProductcardPageCatalogHouseplansComponent } from './energyestimatorbuilding-productcard-page-catalog-houseplans.component';

describe('EnergyestimatorbuildingProductcardPageCatalogHouseplansComponent', () => {
  let component: EnergyestimatorbuildingProductcardPageCatalogHouseplansComponent;
  let fixture: ComponentFixture<EnergyestimatorbuildingProductcardPageCatalogHouseplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        EnergyestimatorbuildingProductcardPageCatalogHouseplansComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(
      EnergyestimatorbuildingProductcardPageCatalogHouseplansComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
