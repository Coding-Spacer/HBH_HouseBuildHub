import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorymenuBuildersSelectHeaderGlobalComponent } from './categorymenu-builders-select-header-global.component';

describe('CategorymenuBuildersSelectHeaderGlobalComponent', () => {
  let component: CategorymenuBuildersSelectHeaderGlobalComponent;
  let fixture: ComponentFixture<CategorymenuBuildersSelectHeaderGlobalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategorymenuBuildersSelectHeaderGlobalComponent]
    });
    fixture = TestBed.createComponent(CategorymenuBuildersSelectHeaderGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
