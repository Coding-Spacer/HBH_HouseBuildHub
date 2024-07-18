import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarnbuttonProductcardPageCatalogHouseplansComponent } from './earnbutton-productcard-page-catalog-houseplans.component';

describe('EarnbuttonProductcardPageCatalogHouseplansComponent', () => {
  let component: EarnbuttonProductcardPageCatalogHouseplansComponent;
  let fixture: ComponentFixture<EarnbuttonProductcardPageCatalogHouseplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EarnbuttonProductcardPageCatalogHouseplansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EarnbuttonProductcardPageCatalogHouseplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
