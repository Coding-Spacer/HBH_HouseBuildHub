import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbGlobalComponent } from './breadcrumb-global.component';

describe('BreadcrumbGlobalComponent', () => {
  let component: BreadcrumbGlobalComponent;
  let fixture: ComponentFixture<BreadcrumbGlobalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BreadcrumbGlobalComponent]
    });
    fixture = TestBed.createComponent(BreadcrumbGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
