import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardviewtogglePageCatalogHouseplansComponent } from './cardviewtoggle-page-catalog-houseplans.component';

describe('CardviewtogglePageCatalogHouseplansComponent', () => {
  let component: CardviewtogglePageCatalogHouseplansComponent;
  let fixture: ComponentFixture<CardviewtogglePageCatalogHouseplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardviewtogglePageCatalogHouseplansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardviewtogglePageCatalogHouseplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
