import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtoncloseCreateaccountModalGlobalComponent } from './buttonclose-createaccount-modal-global.component';

describe('ButtoncloseCreateaccountModalGlobalComponent', () => {
  let component: ButtoncloseCreateaccountModalGlobalComponent;
  let fixture: ComponentFixture<ButtoncloseCreateaccountModalGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtoncloseCreateaccountModalGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtoncloseCreateaccountModalGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
