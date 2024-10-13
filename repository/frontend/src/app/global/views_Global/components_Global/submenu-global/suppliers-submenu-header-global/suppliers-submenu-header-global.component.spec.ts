import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliersSubmenuHeaderGlobalComponent } from './suppliers-submenu-header-global.component';

describe('SuppliersSubmenuHeaderGlobalComponent', () => {
  let component: SuppliersSubmenuHeaderGlobalComponent;
  let fixture: ComponentFixture<SuppliersSubmenuHeaderGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuppliersSubmenuHeaderGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuppliersSubmenuHeaderGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
