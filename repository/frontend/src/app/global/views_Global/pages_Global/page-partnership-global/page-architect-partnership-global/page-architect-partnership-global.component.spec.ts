import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageArchitectPartnershipGlobalComponent } from './page-architect-partnership-global.component';

describe('PageArchitectPartnershipGlobalComponent', () => {
  let component: PageArchitectPartnershipGlobalComponent;
  let fixture: ComponentFixture<PageArchitectPartnershipGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageArchitectPartnershipGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageArchitectPartnershipGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
