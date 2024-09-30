import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorsSubmenuGlobalComponent } from './investors-submenu-global.component';

describe('InvestorsSubmenuGlobalComponent', () => {
  let component: InvestorsSubmenuGlobalComponent;
  let fixture: ComponentFixture<InvestorsSubmenuGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestorsSubmenuGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvestorsSubmenuGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
