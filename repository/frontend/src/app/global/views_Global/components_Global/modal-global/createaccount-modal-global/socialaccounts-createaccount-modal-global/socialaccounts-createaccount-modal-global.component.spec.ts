import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialaccountsCreateaccountModalGlobalComponent } from './socialaccounts-createaccount-modal-global.component';

describe('SocialaccountsCreateaccountModalGlobalComponent', () => {
  let component: SocialaccountsCreateaccountModalGlobalComponent;
  let fixture: ComponentFixture<SocialaccountsCreateaccountModalGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialaccountsCreateaccountModalGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SocialaccountsCreateaccountModalGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
