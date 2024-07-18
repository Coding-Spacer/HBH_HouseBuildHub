import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyhometypeProductcardPageCatalogHouseplansComponent } from './energyhometype-productcard-page-catalog-houseplans.component';

describe('EnergyhometypeProductcardPageCatalogHouseplansComponent', () => {
  let component: EnergyhometypeProductcardPageCatalogHouseplansComponent;
  let fixture: ComponentFixture<EnergyhometypeProductcardPageCatalogHouseplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnergyhometypeProductcardPageCatalogHouseplansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnergyhometypeProductcardPageCatalogHouseplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
