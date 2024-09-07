import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameCreateaccountModalGlobalComponent } from './name-createaccount-modal-global.component';

describe('NameCreateaccountModalGlobalComponent', () => {
  let component: NameCreateaccountModalGlobalComponent;
  let fixture: ComponentFixture<NameCreateaccountModalGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NameCreateaccountModalGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NameCreateaccountModalGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
