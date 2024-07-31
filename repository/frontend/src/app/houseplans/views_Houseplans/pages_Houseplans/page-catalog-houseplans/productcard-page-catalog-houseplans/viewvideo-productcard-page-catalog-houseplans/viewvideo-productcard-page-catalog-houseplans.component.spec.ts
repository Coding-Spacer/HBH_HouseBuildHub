import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewvideoProductcardPageCatalogHouseplansComponent } from './viewvideo-productcard-page-catalog-houseplans.component';

describe('ViewvideoProductcardPageCatalogHouseplansComponent', () => {
  let component: ViewvideoProductcardPageCatalogHouseplansComponent;
  let fixture: ComponentFixture<ViewvideoProductcardPageCatalogHouseplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewvideoProductcardPageCatalogHouseplansComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      ViewvideoProductcardPageCatalogHouseplansComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
