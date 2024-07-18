import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageProductcardPageCatalogHouseplansComponent } from './image-productcard-page-catalog-houseplans.component';

describe('ImageProductcardPageCatalogHouseplansComponent', () => {
  let component: ImageProductcardPageCatalogHouseplansComponent;
  let fixture: ComponentFixture<ImageProductcardPageCatalogHouseplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageProductcardPageCatalogHouseplansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageProductcardPageCatalogHouseplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
