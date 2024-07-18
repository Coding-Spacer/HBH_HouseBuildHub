import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerserviceBottomHeaderGlobalComponent } from './customerservice-bottom-header-global.component';

describe('CustomerserviceBottomHeaderGlobalComponent', () => {
  let component: CustomerserviceBottomHeaderGlobalComponent;
  let fixture: ComponentFixture<CustomerserviceBottomHeaderGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerserviceBottomHeaderGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomerserviceBottomHeaderGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
