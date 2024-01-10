import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotfoundGlobalComponent } from './page-notfound-global.component';

describe('PageNotfoundGlobalComponent', () => {
  let component: PageNotfoundGlobalComponent;
  let fixture: ComponentFixture<PageNotfoundGlobalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageNotfoundGlobalComponent]
    });
    fixture = TestBed.createComponent(PageNotfoundGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
