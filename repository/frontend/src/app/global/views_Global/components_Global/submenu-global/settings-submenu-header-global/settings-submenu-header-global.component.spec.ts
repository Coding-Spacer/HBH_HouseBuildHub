import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsSubmenuHeaderGlobalComponent } from './settings-submenu-header-global.component';

describe('SettingsSubmenuHeaderGlobalComponent', () => {
  let component: SettingsSubmenuHeaderGlobalComponent;
  let fixture: ComponentFixture<SettingsSubmenuHeaderGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingsSubmenuHeaderGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SettingsSubmenuHeaderGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
