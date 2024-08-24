import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonclosePersonalhelpcardPageCatalogHouseplansComponent } from './buttonclose-personalhelpcard-page-catalog-houseplans.component';

describe('ButtonclosePersonalhelpcardPageCatalogHouseplansComponent', () => {
  let component: ButtonclosePersonalhelpcardPageCatalogHouseplansComponent;
  let fixture: ComponentFixture<ButtonclosePersonalhelpcardPageCatalogHouseplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonclosePersonalhelpcardPageCatalogHouseplansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonclosePersonalhelpcardPageCatalogHouseplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
