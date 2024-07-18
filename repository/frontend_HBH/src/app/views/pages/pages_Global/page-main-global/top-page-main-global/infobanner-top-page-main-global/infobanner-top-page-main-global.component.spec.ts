import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfobannerTopPageMainGlobalComponent } from './infobanner-top-page-main-global.component';

describe('InfobannerTopPageMainGlobalComponent', () => {
  let component: InfobannerTopPageMainGlobalComponent;
  let fixture: ComponentFixture<InfobannerTopPageMainGlobalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfobannerTopPageMainGlobalComponent]
    });
    fixture = TestBed.createComponent(InfobannerTopPageMainGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
