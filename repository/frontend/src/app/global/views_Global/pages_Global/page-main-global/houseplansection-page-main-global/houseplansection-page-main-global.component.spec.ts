import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseplansectionPageMainGlobalComponent } from './houseplansection-page-main-global.component';

describe('HouseplansectionPageMainGlobalComponent', () => {
  let component: HouseplansectionPageMainGlobalComponent;
  let fixture: ComponentFixture<HouseplansectionPageMainGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HouseplansectionPageMainGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HouseplansectionPageMainGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
