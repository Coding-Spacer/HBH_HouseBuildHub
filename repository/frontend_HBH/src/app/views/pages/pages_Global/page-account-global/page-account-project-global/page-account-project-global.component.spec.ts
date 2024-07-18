import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAccountProjectGlobalComponent } from './page-account-project-global.component';

describe('PageAccountProjectGlobalComponent', () => {
  let component: PageAccountProjectGlobalComponent;
  let fixture: ComponentFixture<PageAccountProjectGlobalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageAccountProjectGlobalComponent]
    });
    fixture = TestBed.createComponent(PageAccountProjectGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
