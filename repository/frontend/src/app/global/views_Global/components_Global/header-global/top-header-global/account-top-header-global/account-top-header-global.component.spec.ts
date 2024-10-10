import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountTopHeaderGlobalComponent } from './account-top-header-global.component';

describe('AccountTopHeaderGlobalComponent', () => {
  let component: AccountTopHeaderGlobalComponent;
  let fixture: ComponentFixture<AccountTopHeaderGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountTopHeaderGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountTopHeaderGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
