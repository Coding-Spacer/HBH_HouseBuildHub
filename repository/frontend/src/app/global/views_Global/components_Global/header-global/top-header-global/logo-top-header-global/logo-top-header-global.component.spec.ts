import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoTopHeaderGlobalComponent } from './logo-top-header-global.component';

describe('LogoTopHeaderGlobalComponent', () => {
  let component: LogoTopHeaderGlobalComponent;
  let fixture: ComponentFixture<LogoTopHeaderGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoTopHeaderGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogoTopHeaderGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
