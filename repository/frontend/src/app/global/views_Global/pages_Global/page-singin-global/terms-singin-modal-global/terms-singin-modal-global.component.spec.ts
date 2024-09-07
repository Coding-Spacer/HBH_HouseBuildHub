import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsSinginModalGlobalComponent } from './terms-singin-modal-global.component';

describe('TermsSinginModalGlobalComponent', () => {
  let component: TermsSinginModalGlobalComponent;
  let fixture: ComponentFixture<TermsSinginModalGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TermsSinginModalGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TermsSinginModalGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
