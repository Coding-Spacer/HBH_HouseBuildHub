import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCategorySellersComponent } from './page-category-sellers.component';

describe('PageCategorySellersComponent', () => {
  let component: PageCategorySellersComponent;
  let fixture: ComponentFixture<PageCategorySellersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageCategorySellersComponent]
    });
    fixture = TestBed.createComponent(PageCategorySellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
