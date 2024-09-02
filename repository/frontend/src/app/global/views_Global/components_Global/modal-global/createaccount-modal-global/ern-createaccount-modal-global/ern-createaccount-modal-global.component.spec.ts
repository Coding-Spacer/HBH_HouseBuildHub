import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErnCreateaccountModalGlobalComponent } from './ern-createaccount-modal-global.component';

describe('ErnCreateaccountModalGlobalComponent', () => {
  let component: ErnCreateaccountModalGlobalComponent;
  let fixture: ComponentFixture<ErnCreateaccountModalGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErnCreateaccountModalGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErnCreateaccountModalGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
