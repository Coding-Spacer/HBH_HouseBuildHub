import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCatalogShopsComponent } from './page-catalog-shops.component';

describe('PageCatalogShopsComponent', () => {
  let component: PageCatalogShopsComponent;
  let fixture: ComponentFixture<PageCatalogShopsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageCatalogShopsComponent]
    });
    fixture = TestBed.createComponent(PageCatalogShopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
