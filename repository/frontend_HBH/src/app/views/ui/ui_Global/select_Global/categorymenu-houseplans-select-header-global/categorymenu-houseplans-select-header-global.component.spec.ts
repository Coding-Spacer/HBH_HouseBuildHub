import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorymenuHouseplansSelectHeaderGlobalComponent } from './categorymenu-houseplans-select-header-global.component';

describe('CategorymenuHouseplansSelectHeaderGlobalComponent', () => {
  let component: CategorymenuHouseplansSelectHeaderGlobalComponent;
  let fixture: ComponentFixture<CategorymenuHouseplansSelectHeaderGlobalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategorymenuHouseplansSelectHeaderGlobalComponent]
    });
    fixture = TestBed.createComponent(CategorymenuHouseplansSelectHeaderGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
