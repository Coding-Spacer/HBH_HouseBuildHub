import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtoncloseSinginModalGlobalComponent } from './buttonclose-singin-modal-global.component';

describe('ButtoncloseSinginModalGlobalComponent', () => {
  let component: ButtoncloseSinginModalGlobalComponent;
  let fixture: ComponentFixture<ButtoncloseSinginModalGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtoncloseSinginModalGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtoncloseSinginModalGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
