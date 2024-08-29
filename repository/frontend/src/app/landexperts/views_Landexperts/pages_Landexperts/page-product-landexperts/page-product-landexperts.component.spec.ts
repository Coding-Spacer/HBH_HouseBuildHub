import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProductLandexpertsComponent } from './page-product-landexperts.component';

describe('PageProductLandexpertsComponent', () => {
  let component: PageProductLandexpertsComponent;
  let fixture: ComponentFixture<PageProductLandexpertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageProductLandexpertsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageProductLandexpertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
