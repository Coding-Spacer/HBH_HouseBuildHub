import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalinfoPersonalhelpwidgetPageMainGlobalComponent } from './additionalinfo-personalhelpwidget-page-main-global.component';

describe('AdditionalinfoPersonalhelpwidgetPageMainGlobalComponent', () => {
  let component: AdditionalinfoPersonalhelpwidgetPageMainGlobalComponent;
  let fixture: ComponentFixture<AdditionalinfoPersonalhelpwidgetPageMainGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdditionalinfoPersonalhelpwidgetPageMainGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdditionalinfoPersonalhelpwidgetPageMainGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
