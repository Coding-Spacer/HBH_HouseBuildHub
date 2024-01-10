import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrolltotopGlobalComponent } from './scrolltotop-global.component';

describe('ScrolltotopGlobalComponent', () => {
  let component: ScrolltotopGlobalComponent;
  let fixture: ComponentFixture<ScrolltotopGlobalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScrolltotopGlobalComponent]
    });
    fixture = TestBed.createComponent(ScrolltotopGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
