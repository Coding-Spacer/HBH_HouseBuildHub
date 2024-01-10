import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCategoryBuildersComponent } from './page-category-builders.component';

describe('PageCategoryBuildersComponent', () => {
  let component: PageCategoryBuildersComponent;
  let fixture: ComponentFixture<PageCategoryBuildersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageCategoryBuildersComponent]
    });
    fixture = TestBed.createComponent(PageCategoryBuildersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
