import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermittingSubmenuHeaderGlobalComponent } from './permitting-submenu-header-global.component';

describe('PermittingSubmenuHeaderGlobalComponent', () => {
  let component: PermittingSubmenuHeaderGlobalComponent;
  let fixture: ComponentFixture<PermittingSubmenuHeaderGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PermittingSubmenuHeaderGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PermittingSubmenuHeaderGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
