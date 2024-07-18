import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameProductcardPageCatalogHouseplansComponent } from './name-productcard-page-catalog-houseplans.component';

describe('NameProductcardPageCatalogHouseplansComponent', () => {
  let component: NameProductcardPageCatalogHouseplansComponent;
  let fixture: ComponentFixture<NameProductcardPageCatalogHouseplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NameProductcardPageCatalogHouseplansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NameProductcardPageCatalogHouseplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
