import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerAboveheaderGlobalComponent } from './banner-aboveheader-global.component';

describe('BannerAboveheaderGlobalComponent', () => {
  let component: BannerAboveheaderGlobalComponent;
  let fixture: ComponentFixture<BannerAboveheaderGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerAboveheaderGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BannerAboveheaderGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
