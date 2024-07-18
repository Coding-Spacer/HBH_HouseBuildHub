import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoarchitectsCenterPageMainGlobalComponent } from './infoarchitects-center-page-main-global.component';

describe('InfoarchitectsCenterPageMainGlobalComponent', () => {
  let component: InfoarchitectsCenterPageMainGlobalComponent;
  let fixture: ComponentFixture<InfoarchitectsCenterPageMainGlobalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoarchitectsCenterPageMainGlobalComponent]
    });
    fixture = TestBed.createComponent(InfoarchitectsCenterPageMainGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
