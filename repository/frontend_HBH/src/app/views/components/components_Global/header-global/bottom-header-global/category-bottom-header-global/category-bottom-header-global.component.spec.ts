import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryBottomHeaderGlobalComponent } from './category-bottom-header-global.component';

describe('CategoryBottomHeaderGlobalComponent', () => {
  let component: CategoryBottomHeaderGlobalComponent;
  let fixture: ComponentFixture<CategoryBottomHeaderGlobalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryBottomHeaderGlobalComponent]
    });
    fixture = TestBed.createComponent(CategoryBottomHeaderGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
