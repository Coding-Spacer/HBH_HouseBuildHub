import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavebuttonProductcardPageCatalogHouseplansComponent } from './savebutton-productcard-page-catalog-houseplans.component';

describe('SavebuttonProductcardPageCatalogHouseplansComponent', () => {
  let component: SavebuttonProductcardPageCatalogHouseplansComponent;
  let fixture: ComponentFixture<SavebuttonProductcardPageCatalogHouseplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavebuttonProductcardPageCatalogHouseplansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SavebuttonProductcardPageCatalogHouseplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
