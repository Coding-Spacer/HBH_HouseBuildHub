import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeshopsectionPageMainGlobalComponent } from './homeshopsection-page-main-global.component';

describe('HomeshopsectionPageMainGlobalComponent', () => {
  let component: HomeshopsectionPageMainGlobalComponent;
  let fixture: ComponentFixture<HomeshopsectionPageMainGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeshopsectionPageMainGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeshopsectionPageMainGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
