import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierselectPersonalhelpcardPageCatalogHouseplansComponent } from './supplierselect-personalhelpcard-page-catalog-houseplans.component';

describe('SupplierselectPersonalhelpcardPageCatalogHouseplansComponent', () => {
  let component: SupplierselectPersonalhelpcardPageCatalogHouseplansComponent;
  let fixture: ComponentFixture<SupplierselectPersonalhelpcardPageCatalogHouseplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupplierselectPersonalhelpcardPageCatalogHouseplansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SupplierselectPersonalhelpcardPageCatalogHouseplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
