import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonclosePersonalhelpwidgetPageMainGlobalComponent } from './buttonclose-personalhelpwidget-page-main-global.component';

describe('ButtonclosePersonalhelpwidgetPageMainGlobalComponent', () => {
  let component: ButtonclosePersonalhelpwidgetPageMainGlobalComponent;
  let fixture: ComponentFixture<ButtonclosePersonalhelpwidgetPageMainGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonclosePersonalhelpwidgetPageMainGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonclosePersonalhelpwidgetPageMainGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
