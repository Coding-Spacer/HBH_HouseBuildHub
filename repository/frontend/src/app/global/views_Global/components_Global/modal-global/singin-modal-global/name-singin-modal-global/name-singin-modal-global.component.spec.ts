import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameSinginModalGlobalComponent } from './name-singin-modal-global.component';

describe('NameSinginModalGlobalComponent', () => {
  let component: NameSinginModalGlobalComponent;
  let fixture: ComponentFixture<NameSinginModalGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NameSinginModalGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NameSinginModalGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
