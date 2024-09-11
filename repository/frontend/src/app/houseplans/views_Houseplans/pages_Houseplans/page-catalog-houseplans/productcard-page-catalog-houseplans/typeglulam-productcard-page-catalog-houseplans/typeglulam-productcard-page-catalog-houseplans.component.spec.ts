import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeglulamProductcardPageCatalogHouseplansComponent } from './typeglulam-productcard-page-catalog-houseplans.component';

describe('TypeglulamProductcardPageCatalogHouseplansComponent', () => {
  let component: TypeglulamProductcardPageCatalogHouseplansComponent;
  let fixture: ComponentFixture<TypeglulamProductcardPageCatalogHouseplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypeglulamProductcardPageCatalogHouseplansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TypeglulamProductcardPageCatalogHouseplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
