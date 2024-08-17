import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsunenergyProductcardPageCatalogHouseplansComponent } from './viewsunenergy-productcard-page-catalog-houseplans.component';

describe('ViewsunenergyProductcardPageCatalogHouseplansComponent', () => {
  let component: ViewsunenergyProductcardPageCatalogHouseplansComponent;
  let fixture: ComponentFixture<ViewsunenergyProductcardPageCatalogHouseplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewsunenergyProductcardPageCatalogHouseplansComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      ViewsunenergyProductcardPageCatalogHouseplansComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
