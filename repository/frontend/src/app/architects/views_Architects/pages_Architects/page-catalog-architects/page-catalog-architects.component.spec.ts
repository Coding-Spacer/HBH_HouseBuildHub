import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCatalogArchitectsComponent } from './page-catalog-architects.component';

describe('PageCatalogArchitectsComponent', () => {
  let component: PageCatalogArchitectsComponent;
  let fixture: ComponentFixture<PageCatalogArchitectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageCatalogArchitectsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageCatalogArchitectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
