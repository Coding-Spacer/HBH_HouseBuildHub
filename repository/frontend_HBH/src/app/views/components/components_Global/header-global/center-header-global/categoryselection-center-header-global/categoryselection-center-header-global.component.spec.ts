import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryselectionCenterHeaderGlobalComponent } from './categoryselection-center-header-global.component';

describe('CategoryselectionCenterHeaderGlobalComponent', () => {
  let component: CategoryselectionCenterHeaderGlobalComponent;
  let fixture: ComponentFixture<CategoryselectionCenterHeaderGlobalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryselectionCenterHeaderGlobalComponent]
    });
    fixture = TestBed.createComponent(CategoryselectionCenterHeaderGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
