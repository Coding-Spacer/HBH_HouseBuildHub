import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderselectPersonalhelpcardPageCatalogHouseplansComponent } from './builderselect-personalhelpcard-page-catalog-houseplans.component';

describe('BuilderselectPersonalhelpcardPageCatalogHouseplansComponent', () => {
  let component: BuilderselectPersonalhelpcardPageCatalogHouseplansComponent;
  let fixture: ComponentFixture<BuilderselectPersonalhelpcardPageCatalogHouseplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuilderselectPersonalhelpcardPageCatalogHouseplansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuilderselectPersonalhelpcardPageCatalogHouseplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
