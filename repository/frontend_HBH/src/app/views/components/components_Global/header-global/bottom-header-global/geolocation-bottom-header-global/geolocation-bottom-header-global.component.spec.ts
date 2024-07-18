import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeolocationBottomHeaderGlobalComponent } from './geolocation-bottom-header-global.component';

describe('GeolocationBottomHeaderGlobalComponent', () => {
  let component: GeolocationBottomHeaderGlobalComponent;
  let fixture: ComponentFixture<GeolocationBottomHeaderGlobalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeolocationBottomHeaderGlobalComponent]
    });
    fixture = TestBed.createComponent(GeolocationBottomHeaderGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
