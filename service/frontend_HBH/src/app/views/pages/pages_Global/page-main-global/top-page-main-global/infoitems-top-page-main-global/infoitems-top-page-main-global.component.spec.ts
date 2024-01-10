import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoitemsTopPageMainGlobalComponent } from './infoitems-top-page-main-global.component';

describe('InfoitemsTopPageMainGlobalComponent', () => {
  let component: InfoitemsTopPageMainGlobalComponent;
  let fixture: ComponentFixture<InfoitemsTopPageMainGlobalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoitemsTopPageMainGlobalComponent]
    });
    fixture = TestBed.createComponent(InfoitemsTopPageMainGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
