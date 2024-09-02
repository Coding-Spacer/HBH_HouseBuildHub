import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtoncontinueCreateaccountModalGlobalComponent } from './buttoncontinue-createaccount-modal-global.component';

describe('ButtoncontinueCreateaccountModalGlobalComponent', () => {
  let component: ButtoncontinueCreateaccountModalGlobalComponent;
  let fixture: ComponentFixture<ButtoncontinueCreateaccountModalGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtoncontinueCreateaccountModalGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtoncontinueCreateaccountModalGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
