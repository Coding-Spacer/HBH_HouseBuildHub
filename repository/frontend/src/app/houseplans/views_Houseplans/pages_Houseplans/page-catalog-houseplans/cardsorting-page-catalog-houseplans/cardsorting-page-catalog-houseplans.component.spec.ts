import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsortingPageCatalogHouseplansComponent } from './cardsorting-page-catalog-houseplans.component';

describe('CardsortingPageCatalogHouseplansComponent', () => {
  let component: CardsortingPageCatalogHouseplansComponent;
  let fixture: ComponentFixture<CardsortingPageCatalogHouseplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsortingPageCatalogHouseplansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardsortingPageCatalogHouseplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
