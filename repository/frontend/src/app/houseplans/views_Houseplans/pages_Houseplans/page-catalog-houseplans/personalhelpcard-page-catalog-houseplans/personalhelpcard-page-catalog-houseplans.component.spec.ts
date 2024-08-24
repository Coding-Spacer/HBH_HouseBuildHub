import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalhelpcardPageCatalogHouseplansComponent } from './personalhelpcard-page-catalog-houseplans.component';

describe('PersonalhelpcardPageCatalogHouseplansComponent', () => {
  let component: PersonalhelpcardPageCatalogHouseplansComponent;
  let fixture: ComponentFixture<PersonalhelpcardPageCatalogHouseplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalhelpcardPageCatalogHouseplansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonalhelpcardPageCatalogHouseplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
