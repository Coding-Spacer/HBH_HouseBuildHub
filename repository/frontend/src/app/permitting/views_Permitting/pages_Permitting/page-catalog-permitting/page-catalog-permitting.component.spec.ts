import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCatalogPermittingComponent } from './page-catalog-permitting.component';

describe('PageCatalogPermittingComponent', () => {
  let component: PageCatalogPermittingComponent;
  let fixture: ComponentFixture<PageCatalogPermittingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageCatalogPermittingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageCatalogPermittingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
