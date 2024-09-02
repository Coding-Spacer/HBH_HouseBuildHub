import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinginModalGlobalComponent } from './singin-modal-global.component';

describe('SinginModalGlobalComponent', () => {
  let component: SinginModalGlobalComponent;
  let fixture: ComponentFixture<SinginModalGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinginModalGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SinginModalGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
