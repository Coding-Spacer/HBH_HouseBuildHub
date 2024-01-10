import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCategoryShopsComponent } from './page-category-shops.component';

describe('PageCategoryShopsComponent', () => {
  let component: PageCategoryShopsComponent;
  let fixture: ComponentFixture<PageCategoryShopsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageCategoryShopsComponent]
    });
    fixture = TestBed.createComponent(PageCategoryShopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
