import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCustomerserviceGlobalComponent } from './page-customerservice-global.component';

describe('PageCustomerserviceGlobalComponent', () => {
  let component: PageCustomerserviceGlobalComponent;
  let fixture: ComponentFixture<PageCustomerserviceGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageCustomerserviceGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageCustomerserviceGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
