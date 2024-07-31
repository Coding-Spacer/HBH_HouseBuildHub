import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarOnsaleProductcardPageCatalogHouseplansComponent } from './sidebar-onsale-productcard-page-catalog-houseplans.component';

describe('SidebarOnsaleProductcardPageCatalogHouseplansComponent', () => {
  let component: SidebarOnsaleProductcardPageCatalogHouseplansComponent;
  let fixture: ComponentFixture<SidebarOnsaleProductcardPageCatalogHouseplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarOnsaleProductcardPageCatalogHouseplansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidebarOnsaleProductcardPageCatalogHouseplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
