import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildersectionPageMainGlobalComponent } from './buildersection-page-main-global.component';

describe('BuildersectionPageMainGlobalComponent', () => {
  let component: BuildersectionPageMainGlobalComponent;
  let fixture: ComponentFixture<BuildersectionPageMainGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildersectionPageMainGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuildersectionPageMainGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
