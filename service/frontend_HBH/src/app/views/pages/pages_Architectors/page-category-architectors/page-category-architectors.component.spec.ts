import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCategoryArchitectorsComponent } from './page-category-architectors.component';

describe('PageCategoryArchitectorsComponent', () => {
  let component: PageCategoryArchitectorsComponent;
  let fixture: ComponentFixture<PageCategoryArchitectorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageCategoryArchitectorsComponent]
    });
    fixture = TestBed.createComponent(PageCategoryArchitectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
