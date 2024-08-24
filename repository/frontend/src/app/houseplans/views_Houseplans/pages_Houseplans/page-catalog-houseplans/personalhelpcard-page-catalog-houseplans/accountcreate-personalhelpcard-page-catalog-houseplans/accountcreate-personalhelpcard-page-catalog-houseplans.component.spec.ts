import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountcreatePersonalhelpcardPageCatalogHouseplansComponent } from './accountcreate-personalhelpcard-page-catalog-houseplans.component';

describe('AccountcreatePersonalhelpcardPageCatalogHouseplansComponent', () => {
  let component: AccountcreatePersonalhelpcardPageCatalogHouseplansComponent;
  let fixture: ComponentFixture<AccountcreatePersonalhelpcardPageCatalogHouseplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountcreatePersonalhelpcardPageCatalogHouseplansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountcreatePersonalhelpcardPageCatalogHouseplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
