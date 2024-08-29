import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCatalogLandexpertsComponent } from './page-catalog-landexperts.component';

describe('PageCatalogLandexpertsComponent', () => {
  let component: PageCatalogLandexpertsComponent;
  let fixture: ComponentFixture<PageCatalogLandexpertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageCatalogLandexpertsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageCatalogLandexpertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
