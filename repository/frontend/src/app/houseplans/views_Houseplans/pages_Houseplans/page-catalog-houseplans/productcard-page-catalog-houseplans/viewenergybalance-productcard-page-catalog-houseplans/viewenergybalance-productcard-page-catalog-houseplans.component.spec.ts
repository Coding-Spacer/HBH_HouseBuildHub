import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewenergybalanceProductcardPageCatalogHouseplansComponent } from './viewenergybalance-productcard-page-catalog-houseplans.component';

describe('ViewenergybalanceProductcardPageCatalogHouseplansComponent', () => {
  let component: ViewenergybalanceProductcardPageCatalogHouseplansComponent;
  let fixture: ComponentFixture<ViewenergybalanceProductcardPageCatalogHouseplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewenergybalanceProductcardPageCatalogHouseplansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewenergybalanceProductcardPageCatalogHouseplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
