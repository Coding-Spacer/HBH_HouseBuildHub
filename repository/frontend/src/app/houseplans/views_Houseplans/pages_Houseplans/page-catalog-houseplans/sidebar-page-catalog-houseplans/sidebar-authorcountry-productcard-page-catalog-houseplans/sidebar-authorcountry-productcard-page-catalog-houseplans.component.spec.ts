import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarAuthorcountryProductcardPageCatalogHouseplansComponent } from './sidebar-authorcountry-productcard-page-catalog-houseplans.component';

describe('SidebarAuthorcountryProductcardPageCatalogHouseplansComponent', () => {
  let component: SidebarAuthorcountryProductcardPageCatalogHouseplansComponent;
  let fixture: ComponentFixture<SidebarAuthorcountryProductcardPageCatalogHouseplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarAuthorcountryProductcardPageCatalogHouseplansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidebarAuthorcountryProductcardPageCatalogHouseplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
