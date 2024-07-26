import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructionoptionsProductcardPageCatalogHouseplansComponent } from './constructionoptions-productcard-page-catalog-houseplans.component';

describe('ConstructionoptionsProductcardPageCatalogHouseplansComponent', () => {
  let component: ConstructionoptionsProductcardPageCatalogHouseplansComponent;
  let fixture: ComponentFixture<ConstructionoptionsProductcardPageCatalogHouseplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConstructionoptionsProductcardPageCatalogHouseplansComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      ConstructionoptionsProductcardPageCatalogHouseplansComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
