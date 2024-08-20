import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgagesectionPageMainGlobalComponent } from './mortgagesection-page-main-global.component';

describe('MortgagesectionPageMainGlobalComponent', () => {
  let component: MortgagesectionPageMainGlobalComponent;
  let fixture: ComponentFixture<MortgagesectionPageMainGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MortgagesectionPageMainGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MortgagesectionPageMainGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
