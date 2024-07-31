import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarTimeestimatorconstructionProductcardPageCatalogHouseplansComponent } from './sidebar-timeestimatorconstruction-productcard-page-catalog-houseplans.component';

describe('SidebarTimeestimatorconstructionProductcardPageCatalogHouseplansComponent', () => {
  let component: SidebarTimeestimatorconstructionProductcardPageCatalogHouseplansComponent;
  let fixture: ComponentFixture<SidebarTimeestimatorconstructionProductcardPageCatalogHouseplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarTimeestimatorconstructionProductcardPageCatalogHouseplansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidebarTimeestimatorconstructionProductcardPageCatalogHouseplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
