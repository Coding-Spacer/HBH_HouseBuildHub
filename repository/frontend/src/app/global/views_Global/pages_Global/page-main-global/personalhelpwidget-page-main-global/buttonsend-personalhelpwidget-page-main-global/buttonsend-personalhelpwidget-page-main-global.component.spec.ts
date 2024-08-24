import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsendPersonalhelpwidgetPageMainGlobalComponent } from './buttonsend-personalhelpwidget-page-main-global.component';

describe('ButtonsendPersonalhelpwidgetPageMainGlobalComponent', () => {
  let component: ButtonsendPersonalhelpwidgetPageMainGlobalComponent;
  let fixture: ComponentFixture<ButtonsendPersonalhelpwidgetPageMainGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonsendPersonalhelpwidgetPageMainGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonsendPersonalhelpwidgetPageMainGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
