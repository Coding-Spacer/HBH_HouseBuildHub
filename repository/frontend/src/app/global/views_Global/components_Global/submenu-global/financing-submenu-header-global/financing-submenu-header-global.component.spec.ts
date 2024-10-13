import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancingSubmenuHeaderGlobalComponent } from './financing-submenu-header-global.component';

describe('FinancingSubmenuHeaderGlobalComponent', () => {
  let component: FinancingSubmenuHeaderGlobalComponent;
  let fixture: ComponentFixture<FinancingSubmenuHeaderGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinancingSubmenuHeaderGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinancingSubmenuHeaderGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
