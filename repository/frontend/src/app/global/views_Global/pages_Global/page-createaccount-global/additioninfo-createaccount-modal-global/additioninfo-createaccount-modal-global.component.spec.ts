import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditioninfoCreateaccountModalGlobalComponent } from './additioninfo-createaccount-modal-global.component';

describe('AdditioninfoCreateaccountModalGlobalComponent', () => {
  let component: AdditioninfoCreateaccountModalGlobalComponent;
  let fixture: ComponentFixture<AdditioninfoCreateaccountModalGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdditioninfoCreateaccountModalGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdditioninfoCreateaccountModalGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
