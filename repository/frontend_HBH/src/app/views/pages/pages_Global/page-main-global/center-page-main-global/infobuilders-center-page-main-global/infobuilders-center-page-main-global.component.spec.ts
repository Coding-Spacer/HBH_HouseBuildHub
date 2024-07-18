import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfobuildersCenterPageMainGlobalComponent } from './infobuilders-center-page-main-global.component';

describe('InfobuildersCenterPageMainGlobalComponent', () => {
  let component: InfobuildersCenterPageMainGlobalComponent;
  let fixture: ComponentFixture<InfobuildersCenterPageMainGlobalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfobuildersCenterPageMainGlobalComponent]
    });
    fixture = TestBed.createComponent(InfobuildersCenterPageMainGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
