import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorymenuAllSelectHeaderGlobalComponent } from './categorymenu-all-select-header-global.component';

describe('CategorymenuAllSelectHeaderGlobalComponent', () => {
  let component: CategorymenuAllSelectHeaderGlobalComponent;
  let fixture: ComponentFixture<CategorymenuAllSelectHeaderGlobalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategorymenuAllSelectHeaderGlobalComponent]
    });
    fixture = TestBed.createComponent(CategorymenuAllSelectHeaderGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
