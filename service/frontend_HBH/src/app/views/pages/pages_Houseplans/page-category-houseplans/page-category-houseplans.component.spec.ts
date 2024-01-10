import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCategoryHouseplansComponent } from './page-category-houseplans.component';

describe('PageCategoryHouseplansComponent', () => {
  let component: PageCategoryHouseplansComponent;
  let fixture: ComponentFixture<PageCategoryHouseplansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageCategoryHouseplansComponent]
    });
    fixture = TestBed.createComponent(PageCategoryHouseplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
