import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalinfoSinginModalGlobalComponent } from './additionalinfo-singin-modal-global.component';

describe('AdditionalinfoSinginModalGlobalComponent', () => {
  let component: AdditionalinfoSinginModalGlobalComponent;
  let fixture: ComponentFixture<AdditionalinfoSinginModalGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdditionalinfoSinginModalGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdditionalinfoSinginModalGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
