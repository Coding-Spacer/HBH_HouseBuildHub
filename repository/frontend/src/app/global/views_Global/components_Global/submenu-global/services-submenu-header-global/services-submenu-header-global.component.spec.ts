import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesSubmenuHeaderGlobalComponent } from './services-submenu-header-global.component';

describe('ServicesSubmenuHeaderGlobalComponent', () => {
  let component: ServicesSubmenuHeaderGlobalComponent;
  let fixture: ComponentFixture<ServicesSubmenuHeaderGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesSubmenuHeaderGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicesSubmenuHeaderGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
