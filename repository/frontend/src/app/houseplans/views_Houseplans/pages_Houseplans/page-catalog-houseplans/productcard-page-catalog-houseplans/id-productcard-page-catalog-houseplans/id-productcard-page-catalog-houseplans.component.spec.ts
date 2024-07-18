import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdProductcardPageCatalogHouseplansComponent } from './id-productcard-page-catalog-houseplans.component';

describe('IdProductcardPageCatalogHouseplansComponent', () => {
  let component: IdProductcardPageCatalogHouseplansComponent;
  let fixture: ComponentFixture<IdProductcardPageCatalogHouseplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdProductcardPageCatalogHouseplansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IdProductcardPageCatalogHouseplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
