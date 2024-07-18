import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatahomeProductcardPageCatalogHouseplansComponent } from './datahome-productcard-page-catalog-houseplans.component';

describe('DatahomeProductcardPageCatalogHouseplansComponent', () => {
  let component: DatahomeProductcardPageCatalogHouseplansComponent;
  let fixture: ComponentFixture<DatahomeProductcardPageCatalogHouseplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatahomeProductcardPageCatalogHouseplansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatahomeProductcardPageCatalogHouseplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
