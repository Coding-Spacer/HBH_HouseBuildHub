import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAgreementGlobalComponent } from './page-agreement-global.component';

describe('PageAgreementGlobalComponent', () => {
  let component: PageAgreementGlobalComponent;
  let fixture: ComponentFixture<PageAgreementGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAgreementGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageAgreementGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
