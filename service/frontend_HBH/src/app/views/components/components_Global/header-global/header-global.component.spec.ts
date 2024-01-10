import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderGlobalComponent } from './header-global.component';

describe('HeaderGlobalComponent', () => {
  let component: HeaderGlobalComponent;
  let fixture: ComponentFixture<HeaderGlobalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderGlobalComponent]
    });
    fixture = TestBed.createComponent(HeaderGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
