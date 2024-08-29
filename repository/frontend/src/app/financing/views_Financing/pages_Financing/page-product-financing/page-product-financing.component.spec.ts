import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProductFinancingComponent } from './page-product-financing.component';

describe('PageProductFinancingComponent', () => {
  let component: PageProductFinancingComponent;
  let fixture: ComponentFixture<PageProductFinancingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageProductFinancingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageProductFinancingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
