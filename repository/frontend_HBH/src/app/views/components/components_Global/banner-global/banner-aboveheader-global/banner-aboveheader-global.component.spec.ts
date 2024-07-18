import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerAboveheaderGlobalComponent } from './banner-aboveheader-global.component';

describe('BannerAboveheaderGlobalComponent', () => {
  let component: BannerAboveheaderGlobalComponent;
  let fixture: ComponentFixture<BannerAboveheaderGlobalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannerAboveheaderGlobalComponent]
    });
    fixture = TestBed.createComponent(BannerAboveheaderGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
