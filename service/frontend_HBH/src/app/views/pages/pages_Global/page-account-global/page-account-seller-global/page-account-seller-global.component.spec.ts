import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAccountSellerGlobalComponent } from './page-account-seller-global.component';

describe('PageAccountSellerGlobalComponent', () => {
  let component: PageAccountSellerGlobalComponent;
  let fixture: ComponentFixture<PageAccountSellerGlobalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageAccountSellerGlobalComponent]
    });
    fixture = TestBed.createComponent(PageAccountSellerGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
