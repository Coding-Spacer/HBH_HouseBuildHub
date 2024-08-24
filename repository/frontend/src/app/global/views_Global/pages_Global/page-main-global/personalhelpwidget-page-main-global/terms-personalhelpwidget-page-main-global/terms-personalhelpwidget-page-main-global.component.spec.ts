import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsPersonalhelpwidgetPageMainGlobalComponent } from './terms-personalhelpwidget-page-main-global.component';

describe('TermsPersonalhelpwidgetPageMainGlobalComponent', () => {
  let component: TermsPersonalhelpwidgetPageMainGlobalComponent;
  let fixture: ComponentFixture<TermsPersonalhelpwidgetPageMainGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TermsPersonalhelpwidgetPageMainGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TermsPersonalhelpwidgetPageMainGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
