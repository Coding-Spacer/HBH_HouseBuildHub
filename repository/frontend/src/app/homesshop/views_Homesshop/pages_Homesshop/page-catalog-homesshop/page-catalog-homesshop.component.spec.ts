import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCatalogHomesshopComponent } from './page-catalog-homesshop.component';

describe('PageCatalogHomesshopComponent', () => {
  let component: PageCatalogHomesshopComponent;
  let fixture: ComponentFixture<PageCatalogHomesshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageCatalogHomesshopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageCatalogHomesshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
