import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfohouseplansCenterPageMainGlobalComponent } from './infohouseplans-center-page-main-global.component';

describe('InfohouseplansCenterPageMainGlobalComponent', () => {
  let component: InfohouseplansCenterPageMainGlobalComponent;
  let fixture: ComponentFixture<InfohouseplansCenterPageMainGlobalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfohouseplansCenterPageMainGlobalComponent]
    });
    fixture = TestBed.createComponent(InfohouseplansCenterPageMainGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
