import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoModalGlobalComponent } from './info-modal-global.component';

describe('InfoModalGlobalComponent', () => {
  let component: InfoModalGlobalComponent;
  let fixture: ComponentFixture<InfoModalGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoModalGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoModalGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
