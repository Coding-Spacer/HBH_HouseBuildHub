import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCategoryMaterialsComponent } from './page-category-materials.component';

describe('PageCategoryMaterialsComponent', () => {
  let component: PageCategoryMaterialsComponent;
  let fixture: ComponentFixture<PageCategoryMaterialsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageCategoryMaterialsComponent]
    });
    fixture = TestBed.createComponent(PageCategoryMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
