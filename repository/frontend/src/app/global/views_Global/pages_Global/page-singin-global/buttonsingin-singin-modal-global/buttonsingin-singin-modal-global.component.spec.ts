import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsinginSinginModalGlobalComponent } from './buttonsingin-singin-modal-global.component';

describe('ButtonsinginSinginModalGlobalComponent', () => {
  let component: ButtonsinginSinginModalGlobalComponent;
  let fixture: ComponentFixture<ButtonsinginSinginModalGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonsinginSinginModalGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonsinginSinginModalGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
