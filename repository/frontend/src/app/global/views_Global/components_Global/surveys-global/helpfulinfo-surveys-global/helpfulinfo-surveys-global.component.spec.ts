import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpfulinfoSurveysGlobalComponent } from './helpfulinfo-surveys-global.component';

describe('HelpfulinfoSurveysGlobalComponent', () => {
  let component: HelpfulinfoSurveysGlobalComponent;
  let fixture: ComponentFixture<HelpfulinfoSurveysGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpfulinfoSurveysGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HelpfulinfoSurveysGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
