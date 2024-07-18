import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProductHouseplansComponent } from './page-product-houseplans.component';

describe('PageProductHouseplansComponent', () => {
  let component: PageProductHouseplansComponent;
  let fixture: ComponentFixture<PageProductHouseplansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageProductHouseplansComponent]
    });
    fixture = TestBed.createComponent(PageProductHouseplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
