import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailCreateaccountModalGlobalComponent } from './email-createaccount-modal-global.component';

describe('EmailCreateaccountModalGlobalComponent', () => {
  let component: EmailCreateaccountModalGlobalComponent;
  let fixture: ComponentFixture<EmailCreateaccountModalGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailCreateaccountModalGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmailCreateaccountModalGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
