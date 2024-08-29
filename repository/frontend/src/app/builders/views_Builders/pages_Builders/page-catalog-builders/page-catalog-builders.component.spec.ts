import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCatalogBuildersComponent } from './page-catalog-builders.component';

describe('PageCatalogBuildersComponent', () => {
  let component: PageCatalogBuildersComponent;
  let fixture: ComponentFixture<PageCatalogBuildersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageCatalogBuildersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageCatalogBuildersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
