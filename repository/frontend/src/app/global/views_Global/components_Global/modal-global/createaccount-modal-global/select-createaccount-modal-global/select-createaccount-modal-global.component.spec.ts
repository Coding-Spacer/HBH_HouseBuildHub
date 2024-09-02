import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCreateaccountModalGlobalComponent } from './select-createaccount-modal-global.component';

describe('SelectCreateaccountModalGlobalComponent', () => {
  let component: SelectCreateaccountModalGlobalComponent;
  let fixture: ComponentFixture<SelectCreateaccountModalGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectCreateaccountModalGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectCreateaccountModalGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
