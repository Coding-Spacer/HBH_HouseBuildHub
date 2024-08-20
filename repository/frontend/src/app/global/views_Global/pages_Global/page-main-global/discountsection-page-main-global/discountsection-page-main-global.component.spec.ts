import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountsectionPageMainGlobalComponent } from './discountsection-page-main-global.component';

describe('DiscountsectionPageMainGlobalComponent', () => {
  let component: DiscountsectionPageMainGlobalComponent;
  let fixture: ComponentFixture<DiscountsectionPageMainGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscountsectionPageMainGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiscountsectionPageMainGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
