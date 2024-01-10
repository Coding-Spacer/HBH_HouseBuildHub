import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCardShopsComponent } from './page-card-shops.component';

describe('PageCardShopsComponent', () => {
  let component: PageCardShopsComponent;
  let fixture: ComponentFixture<PageCardShopsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageCardShopsComponent]
    });
    fixture = TestBed.createComponent(PageCardShopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
