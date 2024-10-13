import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandexpertsSubmenuHeaderGlobalComponent } from './landexperts-submenu-header-global.component';

describe('LandexpertsSubmenuHeaderGlobalComponent', () => {
  let component: LandexpertsSubmenuHeaderGlobalComponent;
  let fixture: ComponentFixture<LandexpertsSubmenuHeaderGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandexpertsSubmenuHeaderGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandexpertsSubmenuHeaderGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
