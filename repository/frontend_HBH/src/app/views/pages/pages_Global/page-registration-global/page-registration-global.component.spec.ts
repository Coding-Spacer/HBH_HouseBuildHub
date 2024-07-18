import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRegistrationGlobalComponent } from './page-registration-global.component';

describe('PageRegistrationGlobalComponent', () => {
  let component: PageRegistrationGlobalComponent;
  let fixture: ComponentFixture<PageRegistrationGlobalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageRegistrationGlobalComponent]
    });
    fixture = TestBed.createComponent(PageRegistrationGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
