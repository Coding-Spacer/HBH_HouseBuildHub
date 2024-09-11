import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypecustomProductcardPageCatalogHouseplansComponent } from './typecustom-productcard-page-catalog-houseplans.component';

describe('TypecustomProductcardPageCatalogHouseplansComponent', () => {
  let component: TypecustomProductcardPageCatalogHouseplansComponent;
  let fixture: ComponentFixture<TypecustomProductcardPageCatalogHouseplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypecustomProductcardPageCatalogHouseplansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TypecustomProductcardPageCatalogHouseplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
