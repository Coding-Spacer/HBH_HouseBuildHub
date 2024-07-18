import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructioncostProductcardPageCatalogHouseplansComponent } from './constructioncost-productcard-page-catalog-houseplans.component';

describe('ConstructioncostProductcardPageCatalogHouseplansComponent', () => {
  let component: ConstructioncostProductcardPageCatalogHouseplansComponent;
  let fixture: ComponentFixture<ConstructioncostProductcardPageCatalogHouseplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConstructioncostProductcardPageCatalogHouseplansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConstructioncostProductcardPageCatalogHouseplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
