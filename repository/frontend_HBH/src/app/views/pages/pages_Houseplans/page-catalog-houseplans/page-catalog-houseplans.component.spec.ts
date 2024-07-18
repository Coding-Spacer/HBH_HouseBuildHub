import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCatalogHouseplansComponent } from './page-catalog-houseplans.component';

describe('PageCatalogHouseplansComponent', () => {
  let component: PageCatalogHouseplansComponent;
  let fixture: ComponentFixture<PageCatalogHouseplansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageCatalogHouseplansComponent]
    });
    fixture = TestBed.createComponent(PageCatalogHouseplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
