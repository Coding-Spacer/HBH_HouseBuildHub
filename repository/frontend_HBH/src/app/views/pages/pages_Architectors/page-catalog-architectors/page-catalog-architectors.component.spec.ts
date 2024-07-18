import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCatalogArchitectorsComponent } from './page-catalog-architectors.component';

describe('PageCatalogArchitectorsComponent', () => {
  let component: PageCatalogArchitectorsComponent;
  let fixture: ComponentFixture<PageCatalogArchitectorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageCatalogArchitectorsComponent]
    });
    fixture = TestBed.createComponent(PageCatalogArchitectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
