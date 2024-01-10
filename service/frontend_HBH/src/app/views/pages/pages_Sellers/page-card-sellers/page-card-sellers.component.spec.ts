import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCardSellersComponent } from './page-card-sellers.component';

describe('PageCardSellersComponent', () => {
  let component: PageCardSellersComponent;
  let fixture: ComponentFixture<PageCardSellersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageCardSellersComponent]
    });
    fixture = TestBed.createComponent(PageCardSellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
