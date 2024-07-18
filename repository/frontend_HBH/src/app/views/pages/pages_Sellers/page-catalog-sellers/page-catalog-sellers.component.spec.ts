import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCatalogSellersComponent } from './page-catalog-sellers.component';

describe('PageCatalogSellersComponent', () => {
  let component: PageCatalogSellersComponent;
  let fixture: ComponentFixture<PageCatalogSellersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageCatalogSellersComponent]
    });
    fixture = TestBed.createComponent(PageCatalogSellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
