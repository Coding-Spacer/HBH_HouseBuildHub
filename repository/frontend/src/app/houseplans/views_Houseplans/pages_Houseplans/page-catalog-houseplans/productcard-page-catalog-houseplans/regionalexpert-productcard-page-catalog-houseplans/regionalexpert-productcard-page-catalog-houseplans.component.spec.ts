import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionalexpertProductcardPageCatalogHouseplansComponent } from './regionalexpert-productcard-page-catalog-houseplans.component';

describe('RegionalexpertProductcardPageCatalogHouseplansComponent', () => {
  let component: RegionalexpertProductcardPageCatalogHouseplansComponent;
  let fixture: ComponentFixture<RegionalexpertProductcardPageCatalogHouseplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegionalexpertProductcardPageCatalogHouseplansComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      RegionalexperteProductcardPageCatalogHouseplansComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
