import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarCostestimatorhomeProductcardPageCatalogHouseplansComponent } from './sidebar-costestimatorhome-productcard-page-catalog-houseplans.component';

describe('SidebarCostestimatorhomeProductcardPageCatalogHouseplansComponent', () => {
  let component: SidebarCostestimatorhomeProductcardPageCatalogHouseplansComponent;
  let fixture: ComponentFixture<SidebarCostestimatorhomeProductcardPageCatalogHouseplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarCostestimatorhomeProductcardPageCatalogHouseplansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidebarCostestimatorhomeProductcardPageCatalogHouseplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
