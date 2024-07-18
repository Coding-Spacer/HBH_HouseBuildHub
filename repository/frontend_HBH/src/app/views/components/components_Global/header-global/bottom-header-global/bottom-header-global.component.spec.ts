import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomHeaderGlobalComponent } from './bottom-header-global.component';

describe('BottomHeaderGlobalComponent', () => {
  let component: BottomHeaderGlobalComponent;
  let fixture: ComponentFixture<BottomHeaderGlobalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BottomHeaderGlobalComponent]
    });
    fixture = TestBed.createComponent(BottomHeaderGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
