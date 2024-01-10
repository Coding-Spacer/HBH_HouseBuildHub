import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionSelectFooterGlobalComponent } from './region-select-footer-global.component';

describe('RegionSelectFooterGlobalComponent', () => {
  let component: RegionSelectFooterGlobalComponent;
  let fixture: ComponentFixture<RegionSelectFooterGlobalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegionSelectFooterGlobalComponent]
    });
    fixture = TestBed.createComponent(RegionSelectFooterGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
