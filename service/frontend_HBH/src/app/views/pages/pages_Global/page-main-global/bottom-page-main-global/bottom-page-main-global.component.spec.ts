import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomPageMainGlobalComponent } from './bottom-page-main-global.component';

describe('BottomPageMainGlobalComponent', () => {
  let component: BottomPageMainGlobalComponent;
  let fixture: ComponentFixture<BottomPageMainGlobalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BottomPageMainGlobalComponent]
    });
    fixture = TestBed.createComponent(BottomPageMainGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
