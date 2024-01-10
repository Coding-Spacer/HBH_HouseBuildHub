import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterPageMainGlobalComponent } from './center-page-main-global.component';

describe('CenterPageMainGlobalComponent', () => {
  let component: CenterPageMainGlobalComponent;
  let fixture: ComponentFixture<CenterPageMainGlobalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CenterPageMainGlobalComponent]
    });
    fixture = TestBed.createComponent(CenterPageMainGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
