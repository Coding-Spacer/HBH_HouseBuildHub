import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCatalogFinancingComponent } from './page-catalog-financing.component';

describe('PageCatalogFinancingComponent', () => {
  let component: PageCatalogFinancingComponent;
  let fixture: ComponentFixture<PageCatalogFinancingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageCatalogFinancingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageCatalogFinancingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
