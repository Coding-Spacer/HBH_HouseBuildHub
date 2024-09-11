import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeprefabProductcardPageCatalogHouseplansComponent } from './typeprefab-productcard-page-catalog-houseplans.component';

describe('TypeprefabProductcardPageCatalogHouseplansComponent', () => {
  let component: TypeprefabProductcardPageCatalogHouseplansComponent;
  let fixture: ComponentFixture<TypeprefabProductcardPageCatalogHouseplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypeprefabProductcardPageCatalogHouseplansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TypeprefabProductcardPageCatalogHouseplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
