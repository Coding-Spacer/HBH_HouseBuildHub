import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarConstructionoptionsProductcardPageCatalogHouseplansComponent } from './sidebar-constructionoptions-productcard-page-catalog-houseplans.component';

describe('SidebarConstructionoptionsProductcardPageCatalogHouseplansComponent', () => {
  let component: SidebarConstructionoptionsProductcardPageCatalogHouseplansComponent;
  let fixture: ComponentFixture<SidebarConstructionoptionsProductcardPageCatalogHouseplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarConstructionoptionsProductcardPageCatalogHouseplansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidebarConstructionoptionsProductcardPageCatalogHouseplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
