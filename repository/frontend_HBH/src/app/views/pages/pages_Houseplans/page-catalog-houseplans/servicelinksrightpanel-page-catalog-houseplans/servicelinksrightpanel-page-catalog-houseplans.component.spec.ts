import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicelinksrightpanelPageCatalogHouseplansComponent } from './servicelinksrightpanel-page-catalog-houseplans.component';

describe('ServicelinksrightpanelPageCatalogHouseplansComponent', () => {
  let component: ServicelinksrightpanelPageCatalogHouseplansComponent;
  let fixture: ComponentFixture<ServicelinksrightpanelPageCatalogHouseplansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicelinksrightpanelPageCatalogHouseplansComponent]
    });
    fixture = TestBed.createComponent(ServicelinksrightpanelPageCatalogHouseplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
