import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartTopHeaderGlobalComponent } from './cart-top-header-global.component';

describe('CartTopHeaderGlobalComponent', () => {
  let component: CartTopHeaderGlobalComponent;
  let fixture: ComponentFixture<CartTopHeaderGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartTopHeaderGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartTopHeaderGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
