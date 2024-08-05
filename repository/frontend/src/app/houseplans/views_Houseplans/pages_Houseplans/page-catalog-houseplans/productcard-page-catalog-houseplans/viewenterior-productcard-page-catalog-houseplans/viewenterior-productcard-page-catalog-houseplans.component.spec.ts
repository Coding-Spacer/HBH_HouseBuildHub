import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewenteriorProductcardPageCatalogHouseplansComponent } from './viewenterior-productcard-page-catalog-houseplans.component';

describe('ViewenteriorProductcardPageCatalogHouseplansComponent', () => {
  let component: ViewenteriorProductcardPageCatalogHouseplansComponent;
  let fixture: ComponentFixture<ViewenteriorProductcardPageCatalogHouseplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewenteriorProductcardPageCatalogHouseplansComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      ViewenteriorProductcardPageCatalogHouseplansComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
