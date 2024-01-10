import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewedGlobalComponent } from './reviewed-global.component';

describe('ReviewedGlobalComponent', () => {
  let component: ReviewedGlobalComponent;
  let fixture: ComponentFixture<ReviewedGlobalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewedGlobalComponent]
    });
    fixture = TestBed.createComponent(ReviewedGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
