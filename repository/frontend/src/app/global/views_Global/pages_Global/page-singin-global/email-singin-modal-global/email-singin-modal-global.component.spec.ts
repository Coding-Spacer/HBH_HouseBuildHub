import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailSinginModalGlobalComponent } from './email-singin-modal-global.component';

describe('EmailSinginModalGlobalComponent', () => {
  let component: EmailSinginModalGlobalComponent;
  let fixture: ComponentFixture<EmailSinginModalGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailSinginModalGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmailSinginModalGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
