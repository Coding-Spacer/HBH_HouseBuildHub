import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedGlobalComponent } from './recommended-global.component';

describe('RecommendedGlobalComponent', () => {
  let component: RecommendedGlobalComponent;
  let fixture: ComponentFixture<RecommendedGlobalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecommendedGlobalComponent]
    });
    fixture = TestBed.createComponent(RecommendedGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
