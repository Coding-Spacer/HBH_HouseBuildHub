import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionsusePageHelpGlobalComponent } from './conditionsuse-page-help-global.component';

describe('ConditionsusePageHelpGlobalComponent', () => {
  let component: ConditionsusePageHelpGlobalComponent;
  let fixture: ComponentFixture<ConditionsusePageHelpGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConditionsusePageHelpGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConditionsusePageHelpGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
