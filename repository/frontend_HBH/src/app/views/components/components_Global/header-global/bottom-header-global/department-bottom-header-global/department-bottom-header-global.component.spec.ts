import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentBottomHeaderGlobalComponent } from './department-bottom-header-global.component';

describe('DepartmentBottomHeaderGlobalComponent', () => {
  let component: DepartmentBottomHeaderGlobalComponent;
  let fixture: ComponentFixture<DepartmentBottomHeaderGlobalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepartmentBottomHeaderGlobalComponent]
    });
    fixture = TestBed.createComponent(DepartmentBottomHeaderGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
