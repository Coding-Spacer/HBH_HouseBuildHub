import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMainSellersComponent } from './page-main-sellers.component';

describe('PageMainSellersComponent', () => {
  let component: PageMainSellersComponent;
  let fixture: ComponentFixture<PageMainSellersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageMainSellersComponent]
    });
    fixture = TestBed.createComponent(PageMainSellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
