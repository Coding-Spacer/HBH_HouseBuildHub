import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountcreatePersonalhelpwidgetPageMainGlobalComponent } from './accountcreate-personalhelpwidget-page-main-global.component';

describe('AccountcreatePersonalhelpwidgetPageMainGlobalComponent', () => {
  let component: AccountcreatePersonalhelpwidgetPageMainGlobalComponent;
  let fixture: ComponentFixture<AccountcreatePersonalhelpwidgetPageMainGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountcreatePersonalhelpwidgetPageMainGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountcreatePersonalhelpwidgetPageMainGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
