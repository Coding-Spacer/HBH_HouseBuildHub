import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildersSubmenuHeaderGlobalComponent } from './builders-submenu-header-global.component';

describe('BuildersSubmenuHeaderGlobalComponent', () => {
  let component: BuildersSubmenuHeaderGlobalComponent;
  let fixture: ComponentFixture<BuildersSubmenuHeaderGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildersSubmenuHeaderGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuildersSubmenuHeaderGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
