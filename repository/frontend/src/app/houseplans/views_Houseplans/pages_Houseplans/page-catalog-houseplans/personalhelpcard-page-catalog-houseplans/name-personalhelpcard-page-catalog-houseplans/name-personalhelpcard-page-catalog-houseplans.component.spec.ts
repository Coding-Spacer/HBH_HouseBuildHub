import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamePersonalhelpcardPageCatalogHouseplansComponent } from './name-personalhelpcard-page-catalog-houseplans.component';

describe('NamePersonalhelpcardPageCatalogHouseplansComponent', () => {
  let component: NamePersonalhelpcardPageCatalogHouseplansComponent;
  let fixture: ComponentFixture<NamePersonalhelpcardPageCatalogHouseplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NamePersonalhelpcardPageCatalogHouseplansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NamePersonalhelpcardPageCatalogHouseplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
