import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamePersonalhelpwidgetPageMainGlobalComponent } from './name-personalhelpwidget-page-main-global.component';

describe('NamePersonalhelpwidgetPageMainGlobalComponent', () => {
  let component: NamePersonalhelpwidgetPageMainGlobalComponent;
  let fixture: ComponentFixture<NamePersonalhelpwidgetPageMainGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NamePersonalhelpwidgetPageMainGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NamePersonalhelpwidgetPageMainGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
