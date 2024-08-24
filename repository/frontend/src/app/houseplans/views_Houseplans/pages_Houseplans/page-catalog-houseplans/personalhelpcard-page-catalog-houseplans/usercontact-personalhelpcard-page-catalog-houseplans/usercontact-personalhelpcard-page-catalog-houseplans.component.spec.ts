import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercontactPersonalhelpcardPageCatalogHouseplansComponent } from './usercontact-personalhelpcard-page-catalog-houseplans.component';

describe('UsercontactPersonalhelpcardPageCatalogHouseplansComponent', () => {
  let component: UsercontactPersonalhelpcardPageCatalogHouseplansComponent;
  let fixture: ComponentFixture<UsercontactPersonalhelpcardPageCatalogHouseplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsercontactPersonalhelpcardPageCatalogHouseplansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsercontactPersonalhelpcardPageCatalogHouseplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
