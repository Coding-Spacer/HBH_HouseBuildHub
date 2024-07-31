import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeestimatorconstructionProductcardPageCatalogHouseplansComponent } from './timeestimatorconstruction-productcard-page-catalog-houseplans.component';

describe('TimeestimatorconstructionProductcardPageCatalogHouseplansComponent', () => {
  let component: TimeestimatorconstructionProductcardPageCatalogHouseplansComponent;
  let fixture: ComponentFixture<TimeestimatorconstructionProductcardPageCatalogHouseplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TimeestimatorconstructionProductcardPageCatalogHouseplansComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(
      TimeestimatorconstructionProductcardPageCatalogHouseplansComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
