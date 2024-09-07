import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordCreateaccountModalGlobalComponent } from './password-createaccount-modal-global.component';

describe('PasswordCreateaccountModalGlobalComponent', () => {
  let component: PasswordCreateaccountModalGlobalComponent;
  let fixture: ComponentFixture<PasswordCreateaccountModalGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordCreateaccountModalGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PasswordCreateaccountModalGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
