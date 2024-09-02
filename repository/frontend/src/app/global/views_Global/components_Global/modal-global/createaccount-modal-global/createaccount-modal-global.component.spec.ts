import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateaccountModalGlobalComponent } from './createaccount-modal-global.component';

describe('CreateaccountModalGlobalComponent', () => {
  let component: CreateaccountModalGlobalComponent;
  let fixture: ComponentFixture<CreateaccountModalGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateaccountModalGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateaccountModalGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
