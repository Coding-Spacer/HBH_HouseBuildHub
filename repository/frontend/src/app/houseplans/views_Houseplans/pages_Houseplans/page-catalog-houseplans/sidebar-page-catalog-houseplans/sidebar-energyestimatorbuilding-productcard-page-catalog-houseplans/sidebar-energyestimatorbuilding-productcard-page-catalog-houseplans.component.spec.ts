import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarEnergyestimatorbuildingProductcardPageCatalogHouseplansComponent } from './sidebar-energyestimatorbuilding-productcard-page-catalog-houseplans.component';

describe('SidebarEnergyestimatorbuildingProductcardPageCatalogHouseplansComponent', () => {
  let component: SidebarEnergyestimatorbuildingProductcardPageCatalogHouseplansComponent;
  let fixture: ComponentFixture<SidebarEnergyestimatorbuildingProductcardPageCatalogHouseplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarEnergyestimatorbuildingProductcardPageCatalogHouseplansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidebarEnergyestimatorbuildingProductcardPageCatalogHouseplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
