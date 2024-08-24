import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsPersonalhelpcardPageCatalogHouseplansComponent } from './terms-personalhelpcard-page-catalog-houseplans.component';

describe('TermsPersonalhelpcardPageCatalogHouseplansComponent', () => {
  let component: TermsPersonalhelpcardPageCatalogHouseplansComponent;
  let fixture: ComponentFixture<TermsPersonalhelpcardPageCatalogHouseplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TermsPersonalhelpcardPageCatalogHouseplansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TermsPersonalhelpcardPageCatalogHouseplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
