import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorcountryProductcardPageCatalogHouseplansComponent } from './authorcountry-productcard-page-catalog-houseplans.component';

describe('AuthorcountryProductcardPageCatalogHouseplansComponent', () => {
  let component: AuthorcountryProductcardPageCatalogHouseplansComponent;
  let fixture: ComponentFixture<AuthorcountryProductcardPageCatalogHouseplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthorcountryProductcardPageCatalogHouseplansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthorcountryProductcardPageCatalogHouseplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
