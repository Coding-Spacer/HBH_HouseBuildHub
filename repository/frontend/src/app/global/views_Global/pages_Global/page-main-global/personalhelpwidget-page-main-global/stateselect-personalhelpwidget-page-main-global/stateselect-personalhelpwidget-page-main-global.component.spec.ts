import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateselectPersonalhelpwidgetPageMainGlobalComponent } from './stateselect-personalhelpwidget-page-main-global.component';

describe('StateselectPersonalhelpwidgetPageMainGlobalComponent', () => {
  let component: StateselectPersonalhelpwidgetPageMainGlobalComponent;
  let fixture: ComponentFixture<StateselectPersonalhelpwidgetPageMainGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StateselectPersonalhelpwidgetPageMainGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StateselectPersonalhelpwidgetPageMainGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
