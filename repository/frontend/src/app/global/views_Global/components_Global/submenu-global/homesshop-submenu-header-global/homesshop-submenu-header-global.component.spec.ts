import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomesshopSubmenuHeaderGlobalComponent } from './homesshop-submenu-header-global.component';

describe('HomesshopSubmenuHeaderGlobalComponent', () => {
  let component: HomesshopSubmenuHeaderGlobalComponent;
  let fixture: ComponentFixture<HomesshopSubmenuHeaderGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomesshopSubmenuHeaderGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomesshopSubmenuHeaderGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
