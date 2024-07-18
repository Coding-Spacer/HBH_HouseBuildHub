import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProductHouseplansComponent } from './page-product-houseplans.component';

describe('PageProductHouseplansComponent', () => {
  let component: PageProductHouseplansComponent;
  let fixture: ComponentFixture<PageProductHouseplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageProductHouseplansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageProductHouseplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
