import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProductSupliersComponent } from './page-product-supliers.component';

describe('PageProductSupliersComponent', () => {
  let component: PageProductSupliersComponent;
  let fixture: ComponentFixture<PageProductSupliersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageProductSupliersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageProductSupliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
