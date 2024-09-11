import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBuilderPartnershipGlobalComponent } from './page-builder-partnership-global.component';

describe('PageBuilderPartnershipGlobalComponent', () => {
  let component: PageBuilderPartnershipGlobalComponent;
  let fixture: ComponentFixture<PageBuilderPartnershipGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageBuilderPartnershipGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageBuilderPartnershipGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
