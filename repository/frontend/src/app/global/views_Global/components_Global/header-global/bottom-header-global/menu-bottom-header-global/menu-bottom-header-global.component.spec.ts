import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBottomHeaderGlobalComponent } from './menu-bottom-header-global.component';

describe('MenuBottomHeaderGlobalComponent', () => {
  let component: MenuBottomHeaderGlobalComponent;
  let fixture: ComponentFixture<MenuBottomHeaderGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuBottomHeaderGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuBottomHeaderGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
