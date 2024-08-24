import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandselectPersonalhelpcardPageCatalogHouseplansComponent } from './landselect-personalhelpcard-page-catalog-houseplans.component';

describe('LandselectPersonalhelpcardPageCatalogHouseplansComponent', () => {
  let component: LandselectPersonalhelpcardPageCatalogHouseplansComponent;
  let fixture: ComponentFixture<LandselectPersonalhelpcardPageCatalogHouseplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandselectPersonalhelpcardPageCatalogHouseplansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandselectPersonalhelpcardPageCatalogHouseplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
