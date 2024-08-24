import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionselectPersonalhelpwidgetPageMainGlobalComponent } from './optionselect-personalhelpwidget-page-main-global.component';

describe('OptionselectPersonalhelpwidgetPageMainGlobalComponent', () => {
  let component: OptionselectPersonalhelpwidgetPageMainGlobalComponent;
  let fixture: ComponentFixture<OptionselectPersonalhelpwidgetPageMainGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionselectPersonalhelpwidgetPageMainGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OptionselectPersonalhelpwidgetPageMainGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
