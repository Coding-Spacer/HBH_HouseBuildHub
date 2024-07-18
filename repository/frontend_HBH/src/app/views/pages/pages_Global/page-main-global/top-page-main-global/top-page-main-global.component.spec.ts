import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPageMainGlobalComponent } from './top-page-main-global.component';

describe('TopPageMainGlobalComponent', () => {
  let component: TopPageMainGlobalComponent;
  let fixture: ComponentFixture<TopPageMainGlobalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopPageMainGlobalComponent]
    });
    fixture = TestBed.createComponent(TopPageMainGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
