import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsfilterPageCatalogHouseplansComponent } from './chipsfilter-page-catalog-houseplans.component';

describe('ChipsfilterPageCatalogHouseplansComponent', () => {
  let component: ChipsfilterPageCatalogHouseplansComponent;
  let fixture: ComponentFixture<ChipsfilterPageCatalogHouseplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChipsfilterPageCatalogHouseplansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChipsfilterPageCatalogHouseplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
