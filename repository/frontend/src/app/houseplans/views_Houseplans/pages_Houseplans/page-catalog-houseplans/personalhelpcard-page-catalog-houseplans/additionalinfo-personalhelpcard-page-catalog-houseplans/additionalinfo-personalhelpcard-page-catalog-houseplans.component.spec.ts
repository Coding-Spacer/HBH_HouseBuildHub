import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalinfoPersonalhelpcardPageCatalogHouseplansComponent } from './additionalinfo-personalhelpcard-page-catalog-houseplans.component';

describe('AdditionalinfoPersonalhelpcardPageCatalogHouseplansComponent', () => {
  let component: AdditionalinfoPersonalhelpcardPageCatalogHouseplansComponent;
  let fixture: ComponentFixture<AdditionalinfoPersonalhelpcardPageCatalogHouseplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdditionalinfoPersonalhelpcardPageCatalogHouseplansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdditionalinfoPersonalhelpcardPageCatalogHouseplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
