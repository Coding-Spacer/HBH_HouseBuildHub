import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsCreateaccountModalGlobalComponent } from './terms-createaccount-modal-global.component';

describe('TermsCreateaccountModalGlobalComponent', () => {
  let component: TermsCreateaccountModalGlobalComponent;
  let fixture: ComponentFixture<TermsCreateaccountModalGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TermsCreateaccountModalGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TermsCreateaccountModalGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
