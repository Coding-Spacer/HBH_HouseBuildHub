import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewfloorplansProductcardPageCatalogHouseplansComponent } from './viewfloorplans-productcard-page-catalog-houseplans.component';

describe('ViewfloorplansProductcardPageCatalogHouseplansComponent', () => {
  let component: ViewfloorplansProductcardPageCatalogHouseplansComponent;
  let fixture: ComponentFixture<ViewfloorplansProductcardPageCatalogHouseplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewfloorplansProductcardPageCatalogHouseplansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewfloorplansProductcardPageCatalogHouseplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
