import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCatalogMaterialsComponent } from './page-catalog-materials.component';

describe('PageCatalogMaterialsComponent', () => {
  let component: PageCatalogMaterialsComponent;
  let fixture: ComponentFixture<PageCatalogMaterialsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageCatalogMaterialsComponent]
    });
    fixture = TestBed.createComponent(PageCatalogMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
