import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypecontainerProductcardPageCatalogHouseplansComponent } from './typecontainer-productcard-page-catalog-houseplans.component';

describe('TypecontainerProductcardPageCatalogHouseplansComponent', () => {
  let component: TypecontainerProductcardPageCatalogHouseplansComponent;
  let fixture: ComponentFixture<TypecontainerProductcardPageCatalogHouseplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypecontainerProductcardPageCatalogHouseplansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TypecontainerProductcardPageCatalogHouseplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
