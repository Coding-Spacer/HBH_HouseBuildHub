import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnsaleProductcardPageCatalogHouseplansComponent } from './onsale-productcard-page-catalog-houseplans.component';

describe('OnsaleProductcardPageCatalogHouseplansComponent', () => {
  let component: OnsaleProductcardPageCatalogHouseplansComponent;
  let fixture: ComponentFixture<OnsaleProductcardPageCatalogHouseplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnsaleProductcardPageCatalogHouseplansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnsaleProductcardPageCatalogHouseplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
