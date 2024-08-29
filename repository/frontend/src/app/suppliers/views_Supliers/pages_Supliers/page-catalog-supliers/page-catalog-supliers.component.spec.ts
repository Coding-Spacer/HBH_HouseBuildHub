import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCatalogSupliersComponent } from './page-catalog-supliers.component';

describe('PageCatalogSupliersComponent', () => {
  let component: PageCatalogSupliersComponent;
  let fixture: ComponentFixture<PageCatalogSupliersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageCatalogSupliersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageCatalogSupliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
