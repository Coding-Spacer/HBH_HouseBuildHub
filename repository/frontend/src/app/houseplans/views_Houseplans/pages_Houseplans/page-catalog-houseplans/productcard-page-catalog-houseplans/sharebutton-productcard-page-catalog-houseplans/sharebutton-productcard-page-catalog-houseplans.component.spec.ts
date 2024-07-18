import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharebuttonProductcardPageCatalogHouseplansComponent } from './sharebutton-productcard-page-catalog-houseplans.component';

describe('SharebuttonProductcardPageCatalogHouseplansComponent', () => {
  let component: SharebuttonProductcardPageCatalogHouseplansComponent;
  let fixture: ComponentFixture<SharebuttonProductcardPageCatalogHouseplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharebuttonProductcardPageCatalogHouseplansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SharebuttonProductcardPageCatalogHouseplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
