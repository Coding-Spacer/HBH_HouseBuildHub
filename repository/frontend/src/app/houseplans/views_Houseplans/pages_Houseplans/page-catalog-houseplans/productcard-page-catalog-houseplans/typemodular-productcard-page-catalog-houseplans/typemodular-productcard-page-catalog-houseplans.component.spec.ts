import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypemodularProductcardPageCatalogHouseplansComponent } from './typemodular-productcard-page-catalog-houseplans.component';

describe('TypemodularProductcardPageCatalogHouseplansComponent', () => {
  let component: TypemodularProductcardPageCatalogHouseplansComponent;
  let fixture: ComponentFixture<TypemodularProductcardPageCatalogHouseplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypemodularProductcardPageCatalogHouseplansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TypemodularProductcardPageCatalogHouseplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
