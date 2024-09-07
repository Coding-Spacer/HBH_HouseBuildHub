import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSinginModalGlobalComponent } from './select-singin-modal-global.component';

describe('SelectSinginModalGlobalComponent', () => {
  let component: SelectSinginModalGlobalComponent;
  let fixture: ComponentFixture<SelectSinginModalGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectSinginModalGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectSinginModalGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
