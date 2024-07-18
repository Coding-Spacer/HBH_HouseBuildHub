import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmodelProductcardPageCatalogHouseplansComponent } from './viewmodel-productcard-page-catalog-houseplans.component';

describe('ViewmodelProductcardPageCatalogHouseplansComponent', () => {
  let component: ViewmodelProductcardPageCatalogHouseplansComponent;
  let fixture: ComponentFixture<ViewmodelProductcardPageCatalogHouseplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewmodelProductcardPageCatalogHouseplansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewmodelProductcardPageCatalogHouseplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
