import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataenergyProductcardPageCatalogHouseplansComponent } from './dataenergy-productcard-page-catalog-houseplans.component';

describe('DataenergyProductcardPageCatalogHouseplansComponent', () => {
  let component: DataenergyProductcardPageCatalogHouseplansComponent;
  let fixture: ComponentFixture<DataenergyProductcardPageCatalogHouseplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataenergyProductcardPageCatalogHouseplansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataenergyProductcardPageCatalogHouseplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
