import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsendPersonalhelpcardPageCatalogHouseplansComponent } from './buttonsend-personalhelpcard-page-catalog-houseplans.component';

describe('ButtonsendPersonalhelpcardPageCatalogHouseplansComponent', () => {
  let component: ButtonsendPersonalhelpcardPageCatalogHouseplansComponent;
  let fixture: ComponentFixture<ButtonsendPersonalhelpcardPageCatalogHouseplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonsendPersonalhelpcardPageCatalogHouseplansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonsendPersonalhelpcardPageCatalogHouseplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
