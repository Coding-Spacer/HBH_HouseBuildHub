import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopHeaderGlobalComponent } from './top-header-global.component';

describe('TopHeaderGlobalComponent', () => {
  let component: TopHeaderGlobalComponent;
  let fixture: ComponentFixture<TopHeaderGlobalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopHeaderGlobalComponent]
    });
    fixture = TestBed.createComponent(TopHeaderGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
