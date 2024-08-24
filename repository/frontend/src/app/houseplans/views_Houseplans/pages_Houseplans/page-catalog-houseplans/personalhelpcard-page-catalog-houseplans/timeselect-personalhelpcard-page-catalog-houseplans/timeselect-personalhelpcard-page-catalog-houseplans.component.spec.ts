import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeselectPersonalhelpcardPageCatalogHouseplansComponent } from './timeselect-personalhelpcard-page-catalog-houseplans.component';

describe('TimeselectPersonalhelpcardPageCatalogHouseplansComponent', () => {
  let component: TimeselectPersonalhelpcardPageCatalogHouseplansComponent;
  let fixture: ComponentFixture<TimeselectPersonalhelpcardPageCatalogHouseplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeselectPersonalhelpcardPageCatalogHouseplansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimeselectPersonalhelpcardPageCatalogHouseplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
