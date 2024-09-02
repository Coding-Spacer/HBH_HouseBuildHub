import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCatalogSuppliersComponent } from './page-catalog-suppliers.component';

describe('PageCatalogSuppliersComponent', () => {
  let component: PageCatalogSuppliersComponent;
  let fixture: ComponentFixture<PageCatalogSuppliersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageCatalogSuppliersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageCatalogSuppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
