import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSubmenuHeaderGlobalComponent } from './account-submenu-header-global.component';

describe('AccountSubmenuHeaderGlobalComponent', () => {
  let component: AccountSubmenuHeaderGlobalComponent;
  let fixture: ComponentFixture<AccountSubmenuHeaderGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountSubmenuHeaderGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountSubmenuHeaderGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
