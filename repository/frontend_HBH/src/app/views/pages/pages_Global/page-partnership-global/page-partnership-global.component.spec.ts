import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePartnershipGlobalComponent } from './page-partnership-global.component';

describe('PagePartnershipGlobalComponent', () => {
  let component: PagePartnershipGlobalComponent;
  let fixture: ComponentFixture<PagePartnershipGlobalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagePartnershipGlobalComponent]
    });
    fixture = TestBed.createComponent(PagePartnershipGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
