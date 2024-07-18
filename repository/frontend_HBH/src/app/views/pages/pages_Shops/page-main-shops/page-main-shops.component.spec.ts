import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMainShopsComponent } from './page-main-shops.component';

describe('PageMainShopsComponent', () => {
  let component: PageMainShopsComponent;
  let fixture: ComponentFixture<PageMainShopsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageMainShopsComponent]
    });
    fixture = TestBed.createComponent(PageMainShopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
