import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordSinginModalGlobalComponent } from './password-singin-modal-global.component';

describe('PasswordSinginModalGlobalComponent', () => {
  let component: PasswordSinginModalGlobalComponent;
  let fixture: ComponentFixture<PasswordSinginModalGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordSinginModalGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PasswordSinginModalGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
