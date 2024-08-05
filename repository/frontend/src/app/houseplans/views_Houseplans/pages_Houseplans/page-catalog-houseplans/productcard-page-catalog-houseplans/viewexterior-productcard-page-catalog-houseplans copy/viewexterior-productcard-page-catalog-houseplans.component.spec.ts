import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewexteriorProductcardPageCatalogHouseplansComponent } from './viewexterior-productcard-page-catalog-houseplans.component';

describe('ViewexteriorProductcardPageCatalogHouseplansComponent', () => {
  let component: ViewexteriorProductcardPageCatalogHouseplansComponent;
  let fixture: ComponentFixture<ViewexteriorProductcardPageCatalogHouseplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewexteriorProductcardPageCatalogHouseplansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewexteriorProductcardPageCatalogHouseplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
