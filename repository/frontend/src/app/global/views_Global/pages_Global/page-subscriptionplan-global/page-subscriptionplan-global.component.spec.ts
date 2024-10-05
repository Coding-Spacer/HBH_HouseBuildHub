import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSubscriptionplanGlobalComponent } from './page-subscriptionplan-global.component';

describe('PageSubscriptionplanGlobalComponent', () => {
  let component: PageSubscriptionplanGlobalComponent;
  let fixture: ComponentFixture<PageSubscriptionplanGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageSubscriptionplanGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageSubscriptionplanGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
