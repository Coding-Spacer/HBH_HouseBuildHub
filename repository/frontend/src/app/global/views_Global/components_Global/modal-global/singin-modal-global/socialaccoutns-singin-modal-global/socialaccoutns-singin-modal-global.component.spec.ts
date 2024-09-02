import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialaccoutnsSinginModalGlobalComponent } from './socialaccoutns-singin-modal-global.component';

describe('SocialaccoutnsSinginModalGlobalComponent', () => {
  let component: SocialaccoutnsSinginModalGlobalComponent;
  let fixture: ComponentFixture<SocialaccoutnsSinginModalGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialaccoutnsSinginModalGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SocialaccoutnsSinginModalGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
