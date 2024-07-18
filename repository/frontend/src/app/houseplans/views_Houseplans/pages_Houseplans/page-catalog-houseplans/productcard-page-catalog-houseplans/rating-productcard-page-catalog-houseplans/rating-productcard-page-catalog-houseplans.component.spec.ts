import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingProductcardPageCatalogHouseplansComponent } from './rating-productcard-page-catalog-houseplans.component';

describe('RatingProductcardPageCatalogHouseplansComponent', () => {
  let component: RatingProductcardPageCatalogHouseplansComponent;
  let fixture: ComponentFixture<RatingProductcardPageCatalogHouseplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatingProductcardPageCatalogHouseplansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RatingProductcardPageCatalogHouseplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
