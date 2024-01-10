import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosellersCenterPageMainGlobalComponent } from './infosellers-center-page-main-global.component';

describe('InfosellersCenterPageMainGlobalComponent', () => {
  let component: InfosellersCenterPageMainGlobalComponent;
  let fixture: ComponentFixture<InfosellersCenterPageMainGlobalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfosellersCenterPageMainGlobalComponent]
    });
    fixture = TestBed.createComponent(InfosellersCenterPageMainGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
