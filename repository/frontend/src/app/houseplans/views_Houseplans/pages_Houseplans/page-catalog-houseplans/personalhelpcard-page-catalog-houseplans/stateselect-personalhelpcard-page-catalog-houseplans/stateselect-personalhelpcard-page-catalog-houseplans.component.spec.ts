import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateselectPersonalhelpcardPageCatalogHouseplansComponent } from './stateselect-personalhelpcard-page-catalog-houseplans.component';

describe('StateselectPersonalhelpcardPageCatalogHouseplansComponent', () => {
  let component: StateselectPersonalhelpcardPageCatalogHouseplansComponent;
  let fixture: ComponentFixture<StateselectPersonalhelpcardPageCatalogHouseplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StateselectPersonalhelpcardPageCatalogHouseplansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StateselectPersonalhelpcardPageCatalogHouseplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
