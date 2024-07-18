import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountBottomHeaderGlobalComponent } from './discount-bottom-header-global.component';

describe('DiscountBottomHeaderGlobalComponent', () => {
  let component: DiscountBottomHeaderGlobalComponent;
  let fixture: ComponentFixture<DiscountBottomHeaderGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscountBottomHeaderGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiscountBottomHeaderGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
