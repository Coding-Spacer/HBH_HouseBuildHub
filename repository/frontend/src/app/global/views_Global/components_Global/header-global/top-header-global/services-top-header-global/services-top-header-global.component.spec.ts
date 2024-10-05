import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesTopHeaderGlobalComponent } from './services-top-header-global.component';

describe('ServicesTopHeaderGlobalComponent', () => {
  let component: ServicesTopHeaderGlobalComponent;
  let fixture: ComponentFixture<ServicesTopHeaderGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesTopHeaderGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicesTopHeaderGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
