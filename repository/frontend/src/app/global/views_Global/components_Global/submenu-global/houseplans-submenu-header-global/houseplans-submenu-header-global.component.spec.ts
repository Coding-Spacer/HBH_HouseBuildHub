import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseplansSubmenuHeaderGlobalComponent } from './houseplans-submenu-header-global.component';

describe('HouseplansSubmenuHeaderGlobalComponent', () => {
  let component: HouseplansSubmenuHeaderGlobalComponent;
  let fixture: ComponentFixture<HouseplansSubmenuHeaderGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HouseplansSubmenuHeaderGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HouseplansSubmenuHeaderGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
