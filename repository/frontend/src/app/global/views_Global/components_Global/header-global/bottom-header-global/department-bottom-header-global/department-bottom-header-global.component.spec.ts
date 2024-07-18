import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentBottomHeaderGlobalComponent } from './department-bottom-header-global.component';

describe('DepartmentBottomHeaderGlobalComponent', () => {
  let component: DepartmentBottomHeaderGlobalComponent;
  let fixture: ComponentFixture<DepartmentBottomHeaderGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepartmentBottomHeaderGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DepartmentBottomHeaderGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
