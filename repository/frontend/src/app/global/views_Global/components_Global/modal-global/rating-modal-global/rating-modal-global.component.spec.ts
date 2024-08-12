import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingModalGlobalComponent } from './rating-modal-global.component';

describe('RatingModalGlobalComponent', () => {
  let component: RatingModalGlobalComponent;
  let fixture: ComponentFixture<RatingModalGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatingModalGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RatingModalGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
