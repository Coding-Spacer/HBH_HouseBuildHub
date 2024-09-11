import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDeveloperPartnershipGlobalComponent } from './page-developer-partnership-global.component';

describe('PageDeveloperPartnershipGlobalComponent', () => {
  let component: PageDeveloperPartnershipGlobalComponent;
  let fixture: ComponentFixture<PageDeveloperPartnershipGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageDeveloperPartnershipGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageDeveloperPartnershipGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
