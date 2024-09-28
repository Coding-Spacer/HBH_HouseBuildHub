import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnershipsSubmenuGlobalComponent } from './partnerships-submenu-global.component';

describe('PartnershipsSubmenuGlobalComponent', () => {
  let component: PartnershipsSubmenuGlobalComponent;
  let fixture: ComponentFixture<PartnershipsSubmenuGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartnershipsSubmenuGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PartnershipsSubmenuGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
