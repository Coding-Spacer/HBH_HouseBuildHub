import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeprintedProductcardPageCatalogHouseplansComponent } from './typeprinted-productcard-page-catalog-houseplans.component';

describe('TypeprintedProductcardPageCatalogHouseplansComponent', () => {
  let component: TypeprintedProductcardPageCatalogHouseplansComponent;
  let fixture: ComponentFixture<TypeprintedProductcardPageCatalogHouseplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypeprintedProductcardPageCatalogHouseplansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TypeprintedProductcardPageCatalogHouseplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
