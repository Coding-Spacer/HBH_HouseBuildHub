import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarRegionalexpertProductcardPageCatalogHouseplansComponent } from './sidebar-regionalexpert-productcard-page-catalog-houseplans.component';

describe('SidebarRegionalexpertProductcardPageCatalogHouseplansComponent', () => {
  let component: SidebarRegionalexpertProductcardPageCatalogHouseplansComponent;
  let fixture: ComponentFixture<SidebarRegionalexpertProductcardPageCatalogHouseplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarRegionalexpertProductcardPageCatalogHouseplansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidebarRegionalexpertProductcardPageCatalogHouseplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
