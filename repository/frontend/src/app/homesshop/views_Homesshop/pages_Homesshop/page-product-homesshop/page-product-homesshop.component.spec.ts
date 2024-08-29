import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProductHomesshopComponent } from './page-product-homesshop.component';

describe('PageProductHomesshopComponent', () => {
  let component: PageProductHomesshopComponent;
  let fixture: ComponentFixture<PageProductHomesshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageProductHomesshopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageProductHomesshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
